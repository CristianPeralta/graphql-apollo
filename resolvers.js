import Author from './models/Author';

const authors = [
    {
        id: 1,
        name: "John Doe",
        age: 45,
        books: [
            'Harry Potter and ...',
            'For you, Carol'
        ]
    },
    {
        id: 2,
        name: "George Smith",
        age: 51,
        books: [
            '50 Shadows and ...',
            'Annie Dance'
        ]
    }
];

const resolvers = {
    Query: {
        authors: () => {
            return Author.find();
        },
        author: (root, args) => authors.find(author => author.id === args.id)
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new Author({
                name,
                age,
                books,
            });
            return author.save();
        }
    }
};

export default resolvers;