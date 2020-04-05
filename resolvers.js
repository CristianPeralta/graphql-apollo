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
            return authors;
        },
        author: (root, args) => authors.find(author => author.id === args.id)
    }
};

export default resolvers;