import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLError
} from 'graphql';

import { globalIdField } from 'graphql-relay';
import { nodeInterface } from './node';

export const PersonQueryType = new GraphQLObjectType({
  name: 'PersonQueryType',
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
