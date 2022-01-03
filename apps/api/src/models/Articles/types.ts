import {gql} from 'apollo-server';

export const typeDefs = gql`
  type Article {
    id: String
    text: String
  }

  type Query {
    articles: [Article]
  }
`;
