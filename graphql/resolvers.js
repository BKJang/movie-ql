const bkjang = {
    name: "BKJang",
    age: 26,
    gender: "male"
}
const resolvers = {
    Query: {
        person: () => bkjang
    }
}

export default resolvers;