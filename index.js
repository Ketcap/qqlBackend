
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose';

import Product from './models/product';
import Brand from './models/brand';

import resolvers from './resolvers';

import typeDefs from './schemas';

require('dotenv').config();


const Exec = makeExecutableSchema({
	typeDefs,
	resolvers
});

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`, {
	useMongoClient: true
});

const app = express();

app.use(cors());
app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema: Exec, context: { Product, Brand } })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(process.env.PORT);