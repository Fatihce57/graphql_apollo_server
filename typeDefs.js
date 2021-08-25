const { gql } = require('apollo-server-express');

//Queries
const typeDefs = gql`
type Post{
    id:ID
    title:String
    description:String
}
type Query {
    hello: String
    getAll:[Post]
  }
  `;

module.exports = typeDefs;