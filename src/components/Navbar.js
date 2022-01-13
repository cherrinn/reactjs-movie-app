import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const date = new Date().toString().split(" ");
  return (
    <div className="nav">
      <div className="nav-left">
        <Link className="item" to="">
          <h3>Netfix</h3>
        </Link>
        <h5> | </h5>
        <p>{`${date[0]}, ${date[1]} ${date[2]} • ${date[4].slice(0, 5)}`}</p>
      </div>

      <div className={open ? "nav-center active" : "nav-center"}>
        <ul>
          <li onClick={() => setOpen(false)}>
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link className="item" to="/movies">
              Movies
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link className="item" to="/tvShows">
              TV Shows
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link className="item" to="/myList">
              My Lists
            </Link>
          </li>
        </ul>
      </div>

      {open ? (
        <FiX className="menu close" onClick={() => setOpen(!open)} />
      ) : (
        <FiMenu className="menu" onClick={() => setOpen(!open)} />
      )}
    </div>
  );
}

export default Navbar;
