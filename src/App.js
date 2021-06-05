import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import Footer from "./components/Footer";
import {
  fetchMovies,
  fetchTv,
  fetchTopRate,
  fetchGenreMovies,
} from "./services/FatchAPI";
import "./App.css";

function App() {
  const [movies, setMovies] = useState({
    detail: [],
    genre: [],
  });
  const [tv, setTvShow] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetchMovies().then((aMovie) => {
      setMovies((prev) => {
        return { ...prev, detail: aMovie };
      });
    });
    fetchGenreMovies().then((aGenre) => {
      setMovies((prev) => {
        return { ...prev, genre: aGenre };
      });
    });
    fetchTv().then((aTv) => {
      setTvShow(aTv);
    });
    fetchTopRate().then((aTop) => {
      setTop(aTop);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <Navbar />
        <Route exact path="/">
          <Home movies={movies} tv={tv} top={top} />
        </Route>
        <Route exact path="/movies">
          <Search contents={movies} type="movie" />
        </Route>
        <Route path="/tvshows">
          <Search contents={tv} type="tv" />
        </Route>
        <Route path="/myList">
          <MyList />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
