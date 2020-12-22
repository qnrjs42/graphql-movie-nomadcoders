import axios from 'axios';
import fetch from 'node-fetch';

const API_URL = "https://yts.am/api/v2/list_movies.json?";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(API_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};

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

