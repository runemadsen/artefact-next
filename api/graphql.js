const graphqlHTTP = require('express-graphql');

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'Rune';
        }
      }
    }
  })
});

export default graphqlHTTP({
  schema: schema,
  graphiql: true
});
