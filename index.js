const express = require('express');
const { ApolloServer,gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const URL = "mongodb+srv://fatih:Fatih.1978-@cluster0.rafas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log("DB CONNECTED"));

//Queries
const typeDefs = gql`
type Query {
    hello: String
  }
  `

//resolvers
const resolvers = {
    Query: {
        hello: () => {
            return "Hello world"
        }
    },
};

const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(4000, () => console.log("Server UP & Running *4000"));
};

startServer();