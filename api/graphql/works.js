import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLError
} from 'graphql';

import {
  connectionDefinitions,
  globalIdField
} from 'graphql-relay';

import { nodeInterface } from './node';
import { AUTH_ERROR } from '../constants';
import { find, create } from '../db';
import { PersonQueryType } from './persons';

// Query
// ----------------------------------------------------

export const WorkQueryType = new GraphQLObjectType({
  name: 'WorkQueryType',
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
      type: PersonQueryType,
      description: 'The artist who created the artwork.',
      resolve: (work, args) => {
        return find('people', { id:work.artistId, opts: { limit: 1 }})
          .then(rows => rows[0])
      }
    }
  })
});

// Connection
// ----------------------------------------------------

export const { connectionType: WorkConnectionType } = connectionDefinitions({ nodeType: WorkQueryType });

// Mutation
// ----------------------------------------------------

export const WorkMutationType = new GraphQLInputObjectType({
  name: 'WorkMutationType',
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

// Create Work Mutation
// ----------------------------------------------------

export const resolveCreateWork = (value, { work }, req) => {

  if(!req.user) {
    throw new GraphQLError(AUTH_ERROR);
  }

  // If no work attributes are specified
  if(!work) {
    work = {}
  }

  // Make work belong to logged in user
  work.userId = req.user.id

  // TODO: Handle editions!

  return create('works', work).then((rows) => rows[0])
}
