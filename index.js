require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import resolvers from './resolvers';

import typeDefs from './schemas';
const server = new ApolloServer({ typeDefs, resolvers });
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`, {
	useNewUrlParser: true
});

const app = express();
server.applyMiddleware({ app });
app.use(cors());

console.log(process.env)
app.listen(3001);