import {GraphQLClient} from 'graphql-request';

const graphQLBaseUrl = process.env['NX_GQL_API_URL'] ?? "http://localhost:4000";
const gqlClient = new GraphQLClient(graphQLBaseUrl, {
  headers: {'x-api-key': ''},
});

interface ApiRequestProps {
  query: string;
  variables?: Record<string, unknown>;
}

/** centralized point through which all graphql requests are routed */
export const apiRequest = async ({query, variables = {}}: ApiRequestProps) => {
  try {
    return await gqlClient.request(query, variables);
  } catch (err) {
    console.log({err});
    throw err;
  }
};
