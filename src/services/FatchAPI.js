import axios from "axios";

const API_KEY = "67daf18e6fe97cf1cbd70a3d1ae524a3";

export function fetchMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchGenreMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => {
      return data.genres;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchTv() {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchTopRate() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchSearchMovie(searchMovie) {
  return axios
    .get(
      `
      https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}
