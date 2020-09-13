import { request } from 'graphql-request'

async function main() {
  const endpoint = 'http://localhost:4000/graphql'
  let input_value:any = {
    name: "john",
    id: 1
  }
  const variables =
  {
    input_value
  };

  const query = `query getQueryString($input_value: QueryStringInput!) {
    queryString(input: $input_value)
    }`

  try {
    const data = await request(endpoint, query, variables)
    console.log("Success:: " + JSON.stringify(data, undefined, 2));
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
  }
}

main().catch(error => console.error(error))
