import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import {
  globalIdField,
  connectionArgs,
  connectionFromPromisedArray
} from 'graphql-relay';

import { find } from '../db';
import { WorkConnectionType } from './works';
import { ContactConnectionType } from './contacts';
import { nodeInterface } from './node';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
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
        // TODO: This will fetch every work by user and filter server-side for pagination
        // Write logic that limit/orders results by first/last/cursor
        const query = find('works', { userId:user.id })
        return connectionFromPromisedArray(query, args)
      }
    },
    contacts: {
      type: ContactConnectionType,
      description: 'The contacts created by the user.',
      args: {
        ...connectionArgs,
        contactType: { type: GraphQLString }
      },
      resolve: (user, args) => {

        let filter = { userId: user.id };
        if(args.contactType) filter.contactType = args.contactType;

        // TODO: This will fetch every work by user and filter server-side for pagination
        // Write logic that limit/orders results by first/last/cursor
        const query = find('contacts', filter)
        return connectionFromPromisedArray(query, args)
      }
    }
  })
});

// resolve function to get the current logged in user
export const findViewer = (obj, args, req) => {
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
