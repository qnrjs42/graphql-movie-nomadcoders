const nico = {
  name: "nicolas",
  age: 18,
  gender: "female"
}

const resolvers = {
  Query: {
    person: () => {
      return nico;
    }
  }
}

export default resolvers;