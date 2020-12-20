export const people = [
  {
    id: 1,
    name: "nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "child",
    age: 19,
    gender: "male"
  },
  {
    id: 3,
    name: "parent",
    age: 22,
    gender: "female"
  },
]

export const getById = (id: number) => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
}