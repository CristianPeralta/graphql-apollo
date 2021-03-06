import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type Author {
        id: String
        age: Int
        name: String
        books: [String]
    }
    type DeleteResponse {
        deletedCount: Int
        ok: Int
    }
    type Query {
        authors: [Author]
        author(id: String): Author
    }
    type Mutation {
        addAuthor(name: String, age: Int, books: [String]): Author
        updateAuthorName(id: String, name: String): Author
        deleteAuthor(id: String): DeleteResponse
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;
