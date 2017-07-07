import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay';

import { find } from '../db';
import { WorkQueryType } from './works';

export const { nodeInterface, nodeField } = nodeDefinitions(
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
    return WorkQueryType
  }
);
