import React, { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/Home.css";

function Home(props) {
  const { movies, tv, top } = props;
  const [selected, setSelected] = useState("movie");

  const showTopMovies = top
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    .slice(0, 5)
    .map((item) => {
      return <Card contents={item} type="movie" />;
    });

  const showTopTV = tv
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    .slice(0, 5)
    .map((item) => {
      return <Card contents={item} />;
    });

  const fantasyMovies = movies.detail.map((item) => {
    // console.log(item.genre_ids)
    var movieGenre = item.genre_ids.map((id) => {
      var genreItem = movies.genre.find((g) => {
        return g.id === id;
      });
      if (genreItem != null) {
        return genreItem.name
        // console.log(genreItem.name)
      }
    });
    if (movieGenre.includes("Fantasy")) {
      return <Card contents={item} type="movie" />;
    }
  });

  return (
    <div>
      <Banner />
      <div className="top-content-container">
        <div className="top-btn">
          <h2>TOP</h2>
          <button
            className={
              selected == "movie" ? "btn-movies active btn" : "btn-movies btn"
            }
            onClick={() => setSelected("movie")}
          >
            Movies
          </button>
          <button
            className={selected == "tv" ? "btn-tv active btn" : "btn-tv btn"}
            onClick={() => setSelected("tv")}
          >
            TV Shows
          </button>
        </div>
        <div className="top-contents">
          {selected === "movie" ? showTopMovies : showTopTV}
        </div>
        <hr />
      </div>

      <div className="all-contents-container">
        <h2>FANTASY</h2>
        <div className="all-contents">{fantasyMovies}</div>
      </div>
    </div>
  );
}

export default Home;
