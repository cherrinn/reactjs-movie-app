import React, { useContext } from "react";
import { GlobalContext } from "../services/GlobalState";
import { FiPlus, FiXCircle } from "react-icons/fi";
import "../styles/Card.css";

function Card(props) {
  const { contents, search, remove } = props;
  const {
    addMovieToWatchlist,
    removeMovieFromWatclist,
    watchlist,
  } = useContext(GlobalContext);

  let store = watchlist.find((i) => i.id === contents.id);

  const watchlisDisabled = store ? true : false;

  return (
    <div className="show">
      {console.log(contents)}
      <div className={!(search || remove) ? "show-img zoom" : "show-img"}>
        <img
          key={contents.id}
          src={
            contents.poster_path
              ? "https://image.tmdb.org/t/p/original/" + contents.poster_path
              : "https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png"
          }
          alt={contents.title}
        />
      </div>
      <p className="title">{contents.title ? contents.title : contents.name}</p>
      <p className="release">
        {contents.release_date
          ? contents.release_date.slice(0,4)
          : contents.first_air_date}
      </p>
      <div className="rating">
        {contents.vote_average % 1 !== 0
          ? contents.vote_average
          : contents.vote_average + ".0"}
      </div>
      <div className="add-btn-container">
        {search ? (
          <button
            disabled={watchlisDisabled}
            onClick={() => addMovieToWatchlist(contents)}
          >
            <FiPlus />
          </button>
        ) : null}
      </div>
      <div className="remove-btn-container">
        {remove ? (
          <FiXCircle
            className="remove-icon"
            onClick={() => removeMovieFromWatclist(contents.id)}
          />
        ) : null}
      </div>
    </div>
  );
}
export default Card;
