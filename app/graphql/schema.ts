import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from "./resolvers";

const typeDefs = gql`
  type Image {
    id: String
    href: String
    title: String
    description: String
  }
  
  type Query {
    images: [Image]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
 });
 
 export default schema;