export let movies = [
  {
    id: 1,
    name: "Star Wars",
    score: 1
  },
  {
    id: 2,
    name: "Avengers",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 100
  }
]

export const getMovies = () => movies;

export const getById = (id: number) => {
  const filteredMovies = movies.filter(person => person.id === id);
  return filteredMovies[0];
}

export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}