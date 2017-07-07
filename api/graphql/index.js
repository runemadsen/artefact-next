import graphqlHTTP from 'express-graphql';
import pluralize from 'pluralize';
import { WorkType, WorkConnectionType, WorkCreateType, WorkUpdateType, updateWork, createWork, findWork } from './works';
import { UserType, findViewer } from './users';
import { nodeField } from './node';

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLError
} from 'graphql';

import {
  nodeDefinitions,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  connectionArgs,
  connectionFromPromisedArray
} from 'graphql-relay';

// Root Query
// ----------------------------------------------------

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    // Ability to find any node by graphql id
    node: nodeField,

    // Returns the currently logged in user
    viewer: {
      type: UserType,
      resolve: findViewer
    },

    // Returns a work
    work: {
      type: WorkType,
      resolve: findWork,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      }
    }
  }
})

// Root Mutation
// ----------------------------------------------------

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createWork: {
      type: WorkType,
      resolve: createWork,
      args: {
        input: { type: WorkCreateType }
      }
    },
    updateWork: {
      type: WorkType,
      resolve: updateWork,
      args: {
        input: { type: WorkUpdateType }
      }
    }
  }
})

// GraphQL Schema
// ----------------------------------------------------

var schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

// Make middleware
// ----------------------------------------------------

var gql = graphqlHTTP({
  schema: schema,
  graphiql: true
});

module.exports = gql;
