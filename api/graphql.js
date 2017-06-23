import graphqlHTTP from 'express-graphql';
import { find } from './db';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import {
  nodeDefinitions,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  connectionArgs
} from 'graphql-relay';

// Node interface
// ----------------------------------------------------

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    // if (type === 'Faction') {
    //   return getFaction(id);
    // }
    // if (type === 'Ship') {
    //   return getShip(id);
    // }
  },
  obj => {
    // return obj.ships ? factionType : shipType;
  }
);

// Work type
// ----------------------------------------------------

const workType = new GraphQLObjectType({
  name: 'Work',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    title: {
      type: GraphQLString,
      description: 'The title of the artwork.',
    },
  })
});

const { connectionType: workConnection } = connectionDefinitions({ nodeType: workType });

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

        // find works by user id
        // USE ARGS TO USE LAST / FIRST / ORDERING / ETC


      }
      // resolve: (user, args) => connectionFromArray(
      //   faction.ships.map(getShip),
      //   args
      // ),
    }
  })
});

// Query
// ----------------------------------------------------

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
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
