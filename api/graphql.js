import graphqlHTTP from 'express-graphql';
import { find } from './db';
import pluralize from 'pluralize';

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {
  nodeDefinitions,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  connectionArgs,
  connectionFromPromisedArray
} from 'graphql-relay';

// Node interface
// ----------------------------------------------------

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    const table = pluralize(type).toLowerCase();
    return find(table, {id:id, opts:{ limit: 1 }})
      .then(rows => {
        return rows[0]
      })
  },
  obj => {
    // TODO: This should dynamically check for node type
    // and return the correct node type.
    return workType
  }
);

// Works
// ----------------------------------------------------

const workType = new GraphQLObjectType({
  name: 'Work',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    title: {
      type: GraphQLString,
      description: 'The title of the artwork.'
    },
    medium: {
      type: GraphQLString,
      description: 'The medium of the artwork.'
    },
    width: {
      type: GraphQLInt,
      description: 'The width of the artwork.'
    },
    height: {
      type: GraphQLInt,
      description: 'The height of the artwork.'
    },
    depth: {
      type: GraphQLInt,
      description: 'The depth of the artwork.'
    },
    dimensionUnit: {
      type: GraphQLString,
      description: 'The unit of measurement for the width, height, and depth fields.'
    },
    dimensionText: {
      type: GraphQLString,
      description: 'The text description of the artwork dimensions.'
    },
    artist: {
      type: personType,
      description: 'The artist who created the artwork.',
      resolve: (work, args) => {
        return find('people', { id:work.artistId, opts: { limit: 1 }})
          .then(rows => rows[0])
      }
    }
  })
});

const { connectionType: workConnection } = connectionDefinitions({ nodeType: workType });

const workInputType = new GraphQLInputObjectType({
  name: 'Work',
  fields: {
    title: { type: GraphQLString },
    medium: { type: GraphQLString },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt },
    depth: { type: GraphQLInt },
    dimensionUnit: { type: GraphQLString },
    dimensionText: { type: GraphQLString },
    editioned: { type: GraphQLBoolean },
    artistId: { type: GraphQLInt }
  }
});

// Person type
// ----------------------------------------------------

const personType = new GraphQLObjectType({
  name: 'Person',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    type: {
      type: GraphQLString,
      description: 'The type of the person.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the person.',
    },
    company: {
      type: GraphQLString,
      description: 'The company of the person.',
    },
    address1: {
      type: GraphQLString,
      description: 'The address1 of the person.',
    },
    address2: {
      type: GraphQLString,
      description: 'The address1 of the person.',
    },
    city: {
      type: GraphQLString,
      description: 'The city of the person.',
    },
    state: {
      type: GraphQLString,
      description: 'The state of the person.',
    },
    postal: {
      type: GraphQLString,
      description: 'The postal code of the person.',
    },
    phone: {
      type: GraphQLString,
      description: 'The phone of the person.',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the person.',
    },
  })
});

// User type
// ----------------------------------------------------

const userType = new GraphQLObjectType({
  name: 'User',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    username: {
      type: GraphQLID,
      description: 'The username of the user.',
    },
    works: {
      type: workConnection,
      description: 'The artworks created by the user.',
      args: connectionArgs,
      resolve: (user, args) => {
        // TODO: This will fetch every work by user and filter server-side
        // Write logic that limit/orders results by first/last/cursor
        const query = find('works', { userId:user.id })
        return connectionFromPromisedArray(query, args)
      }
    }
  })
});

// Query
// ----------------------------------------------------

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    // Ability to find any node by graphql id
    node: nodeField,

    // Returns the currently logged in user
    viewer: {
      type: userType,
      resolve(obj, args, req) {
        if(req.user) {
          return {
            id: req.user.id,
            username: req.user.username
          }
        }
        else {
          return null
        }
      }
    }
  }
})

// GraphQL Schema
// ----------------------------------------------------

var schema = new GraphQLSchema({
  query: queryType
});

// Make middleware
// ----------------------------------------------------

var gql = graphqlHTTP({
  schema: schema,
  graphiql: true
});

module.exports = gql;
