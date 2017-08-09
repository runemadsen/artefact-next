import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLError
} from 'graphql';

import { connectionDefinitions, globalIdField } from 'graphql-relay';
import { nodeInterface } from './node';

// Query
// ----------------------------------------------------

export const ContactType = new GraphQLObjectType({
  name: 'ContactType',
  interfaces: [ nodeInterface ],
  fields: () => ({
    id: globalIdField(),
    type: {
      type: GraphQLString,
      description: 'The type of the contact.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the contact.',
    },
    company: {
      type: GraphQLString,
      description: 'The company of the contact.',
    },
    address1: {
      type: GraphQLString,
      description: 'The address1 of the contact.',
    },
    address2: {
      type: GraphQLString,
      description: 'The address1 of the contact.',
    },
    city: {
      type: GraphQLString,
      description: 'The city of the contact.',
    },
    state: {
      type: GraphQLString,
      description: 'The state of the contact.',
    },
    postal: {
      type: GraphQLString,
      description: 'The postal code of the contact.',
    },
    phone: {
      type: GraphQLString,
      description: 'The phone of the contact.',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the contact.',
    },
  })
});

// Connection
// ----------------------------------------------------

export const { connectionType: ContactConnectionType } = connectionDefinitions({ nodeType: ContactType });
