import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "../styles/Banner.css";

function Banner() {
  return (
    <div>
      <div className="banner">
        <img
          src="https://www.themoviedb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg"
          alt=""
        />
      </div>
      <div className="overlay"></div>
      <div className="banner-content">
        <div className="content">
          <p>Crime | Drama</p>
          <h1>MONEY HEIST</h1>
          <h5>
            2017 | Director: <span>Álex Pina</span>
          </h5>
          <h5>
            <span>
              Eight thieves take hostages and lock themselves in the Royal Mint
              of <br />
              Spain as a criminal mastermind manipulates the police to carry out
              his plan.
            </span>
          </h5>
        </div>
        <div className="banner-button">
          <button className="btn-watch">
            Watch Trailer <AiFillPlayCircle className="play-icon" />
          </button>
          <button className="btn-read">Read more...</button>
        </div>
        <div className="poster">
          <h5>3 Seasons</h5>
          <br />
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71oRzMhkK9L._SL1500_.jpg"
            alt=""
          />
          <img
            src="https://static.moviecrow.com/gallery/20200420/177951-10.jpg"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgitIiVo4suKCYQ8mzvxSn9J-h7oYKIXeYRMisWOK20ypY6m89KovhwWNCRvI2_mUUUc&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
