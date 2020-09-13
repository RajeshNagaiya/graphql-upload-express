import * as path from "path"
import { QueryResolvers } from "./generated/appstore"

const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require("cors");

var express = require('express');
var graphqlHTTP = require('express-graphql');

interface Resolvers {
  Query : QueryResolvers
}

const resolvers: Resolvers  = {
  Query: {
    queryString: (root, ctx, req) => {
      console.log("Server received request::");
      return 'world'
    }
  }
}

async function getSchema() {
  return await importSchema(path.join(__dirname, "../src/schema.graphql"));
}

function main() {
  getSchema().then((typeDefs) => {
    var app = express();
    app.use(cors());
    const applicationSchema = makeExecutableSchema({
        typeDefs,
        resolvers
      })
    app.use('/graphql', graphqlHTTP({
      schema: applicationSchema,
      graphiql: true,
    }));
    app.listen(4000);
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
  })
}

main();
