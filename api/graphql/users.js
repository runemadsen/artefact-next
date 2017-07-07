import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

import {
  globalIdField,
  connectionArgs,
  connectionFromPromisedArray
} from 'graphql-relay';

import { WorkConnectionType } from './works';
import { nodeInterface } from './node';

export const UserQueryType = new GraphQLObjectType({
  name: 'User',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    username: {
      type: GraphQLID,
      description: 'The username of the user.',
    },
    works: {
      type: WorkConnectionType,
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

// resolve function to get the current logged in user
export const resolveViewer = (obj, args, req) => {
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