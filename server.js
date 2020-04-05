import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from './schema';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/graphqltestdb',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})
.then(() => console.log('DB Connected!'))
.catch((error) => console.log(`DB Connection Error: ${error.message}`));

const server = new ApolloServer({schema});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
