import fetch from 'node-fetch';

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if(limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if(rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}


// export let movies = [
//   {
//     id: 1,
//     name: "Star Wars",
//     score: 1
//   },
//   {
//     id: 2,
//     name: "Avengers",
//     score: 99
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 100
//   }
// ]

// export const getMovies = () => movies;

// export const getById = (id: number) => {
//   const filteredMovies = movies.filter(person => person.id === id);
//   return filteredMovies[0];
// }

// export const deleteMovie = (id: number) => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if(movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// }

// export const addMovie = (name: string, score: number) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name,
//     score
//   }
//   movies.push(newMovie);
//   return newMovie
// }

