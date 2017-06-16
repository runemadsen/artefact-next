const graphqlHTTP = require('express-graphql');

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
  }
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      viewer: {
        type: userType,
        resolve(obj, args, req) {
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
      }
    }
  })
});

var gql = graphqlHTTP({
  schema: schema,
  graphiql: true
});

module.exports = gql;
