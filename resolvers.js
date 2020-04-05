const authors = [
    {
        name: "John Doe",
        age: 45,
        books: [
            'Harry Potter and ...',
            'For you, Carol'
        ]
    },
    {
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
        author: () => {
            return authors;
        }
    }
};

export default resolvers;