import "reflect-metadata";
import path from 'path'

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./resolvers/users-resolver";
import { ProjectsResolver } from "./resolvers/projects-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      UsersResolver,
      ProjectsResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })


  const { url } = await server.listen()
  console.log(`🪄 Server running at: ${url}`);
}

bootstrap()