import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './schema';

const server = new ApolloServer({schema});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
