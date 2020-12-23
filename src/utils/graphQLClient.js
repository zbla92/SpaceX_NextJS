import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export default async function getData(query) {
  const { data, error } = await client.query({
    query: gql`
      ${query}
    `,
  });

  return { data, error };
}
