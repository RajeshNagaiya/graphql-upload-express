# graphql-upload-express
This project demonstrates the capability of graphql based interfaces over REST apis.

## Server Component
The server component is based on express which takes the graphql parsed middleware.
The graphql specification is placed under projects/server/src/schema.graphql.

## Client Component
The client component is simple nodejs based client which requests the graphql-server
with the list of apis supported in the schema

### Build

- Clone the project and run yarn command
- Execute yarn build

### Test
**Start server**
cd projects/server && yarn start
**Start client**
cd projects/client-nodejs && yarn start

### Documentation
The documentation for grapqhl specification would be auto-generated  and placed under
projects/server/src/api-documentations.