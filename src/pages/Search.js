import React, { useState } from "react";
import Card from "../components/Card";
import { fetchSearchMovie } from "../services/FatchAPI";
import "../styles/Search.css";

function Search(props) {
  const { contents, type } = props;
  const [searchText, setSearchText] = useState("");
  const [searchResult, setMovieResult] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchSearchMovie(searchText).then((aSearch) => setMovieResult(aSearch));
  };

  const showAllContent =
    type === "movie"
      ? contents.detail.map((item) => {
          return <Card contents={item} search={true} />;
        })
      : contents.map((item) => {
          return <Card contents={item} search={true} />;
        });

  const showSearch = searchResult.map((item) => {
    return <Card contents={item} type="movie" search={true} />;
  });

  return (
    <div>
      {type == "movie" ? <h1>MOVIES</h1> : <h1>TV SHOWS</h1>}
      <form onSubmit={onSubmit}>
        <input
          className="input-search"
          type="text"
          placeholder={
            type == "movie" ? "Search for a Movie" : "Search for a TV Show"
          }
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      <hr />
      <div className="show-movies-container">
        <div className="all-movies">
          {searchText === "" ? showAllContent : showSearch}
        </div>
      </div>
    </div>
  );
}

export default Search;
