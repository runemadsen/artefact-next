const graphqlHTTP = require('express-graphql');

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql');

// User type
// ----------------------------------------------------

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

// Work type
// ----------------------------------------------------

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

// Query
// ----------------------------------------------------

const queryType = new GraphQLObjectType({
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

// GraphQL Schema
// ----------------------------------------------------

var schema = new GraphQLSchema({
  query: queryType
});

// Make middleware
// ----------------------------------------------------

var gql = graphqlHTTP({
  schema: schema,
  graphiql: true
});

module.exports = gql;
