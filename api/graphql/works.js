import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLError,
  GraphQLNonNull
} from 'graphql';

import {
  connectionDefinitions,
  globalIdField,
  fromGlobalId
} from 'graphql-relay';

import { nodeInterface } from './node';
import { AUTH_ERROR, EMPTY_ERROR } from '../constants';
import { find, create } from '../db';
import { ContactType } from './contacts';

// Query
// ----------------------------------------------------

export const WorkType = new GraphQLObjectType({
  name: 'WorkType',
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
    workCreatedAt: {
      type: GraphQLString,
      description: 'The date the artwork was created.'
    },
    artist: {
      type: ContactType,
      description: 'The artist who created the artwork.',
      resolve: (work, args) => {
        return find('contacts', { id:work.artistId, opts: { limit: 1 }})
          .then(rows => rows[0])
      }
    }
  })
});

export const findWork = (value, { id }, req) => {

  if(!req.user) {
    throw new GraphQLError(AUTH_ERROR);
  }

  if(!id) {
    throw new GraphQLError(EMPTY_ERROR);
  }

  const { id: tableId } = fromGlobalId(unescape(id));

  return find('works', { id:tableId, userId:req.user.id, opts:{ limit:1} }).then((rows) => rows[0])
}

// Connection
// ----------------------------------------------------

export const { connectionType: WorkConnectionType } = connectionDefinitions({ nodeType: WorkType });

// Mutation: Create
// ----------------------------------------------------

export const WorkCreateType = new GraphQLInputObjectType({
  name: 'WorkCreateType',
  fields: {
    title: { type: GraphQLString },
    medium: { type: GraphQLString },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt },
    depth: { type: GraphQLInt },
    dimensionUnit: { type: GraphQLString },
    dimensionText: { type: GraphQLString },
    workCreatedAt: { type: GraphQLString },
    editioned: { type: GraphQLBoolean },
    artistId: { type: GraphQLInt }
  }
});

export const createWork = async (value, { work }, req) => {

  if(!req.user) {
    throw new GraphQLError(AUTH_ERROR);
  }

  // If no work attributes are specified
  if(!work) {
    work = {}
  }

  // Make work belong to logged in user
  work.userId = req.user.id;

  // Create work
  const workRow = await create('works', work).then((rows) => rows[0]);

  // Create edition if needed
  if(!work.editioned) {
    const editionRow = await create('editions', { editionType:'ONLY', workId:workRow.id })
  }

  return workRow;
}

// Mutation: Update
// ----------------------------------------------------

export const WorkUpdateType = new GraphQLInputObjectType({
  name: 'WorkUpdateType',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    medium: { type: GraphQLString },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt },
    depth: { type: GraphQLInt },
    dimensionUnit: { type: GraphQLString },
    dimensionText: { type: GraphQLString },
    workCreatedAt: { type: GraphQLString },
    editioned: { type: GraphQLBoolean },
    artistId: { type: GraphQLInt }
  }
});

export const updateWork = (value, { work }, req) => {

  if(!req.user) {
    throw new GraphQLError(AUTH_ERROR);
  }

  if(!work) {
    throw new GraphQLError(EMPTY_ERROR);
  }

  // HANDLE EDITIONS!

  return create('works', work).then((rows) => rows[0])
}
