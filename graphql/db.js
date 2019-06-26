export const people = [
    {
        id: 1,
        name: "BKJang",
        age: 27,
        gender: "male"
    },
    {
        id: 2,
        name: "SHJo",
        age: 27,
        gender: "male"
    },
    {
        id: 3,
        name: "DHJung",
        age: 27,
        gender: "male"
    },
    {
        id: 4,
        name: "JSKang",
        age: 26,
        gender: "male"
    },
    {
        id: 5,
        name: "JHKim",
        age: 25,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}