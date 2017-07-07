import graphqlHTTP from 'express-graphql';
import pluralize from 'pluralize';
import { WorkType, WorkConnectionType, WorkCreateType, createWork, WorkUpdateType, updateWork } from './works';
import { UserQueryType, resolveViewer } from './users';
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
      type: UserQueryType,
      resolve: resolveViewer
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
      args: {
        input: { type: WorkCreateType }
      },
      resolve: createWork
    },
    updateWork: {
      type: WorkType,
      args: {
        input: { type: WorkUpdateType }
      },
      resolve: updateWork
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
