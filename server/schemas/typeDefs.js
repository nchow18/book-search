// import the gql tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
    books(username: String): [Book]
    book(bookId: String!): Book
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
  }
`;

// login(email: String!, password: String!): User
// login returns a User object, same for addUser
// for Token Auth, add Auth instead of User for LOGIN/addUser

// export the typeDefs
module.exports = typeDefs;