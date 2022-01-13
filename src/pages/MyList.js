import React, { useContext } from "react";
import Card from "../components/Card";
import { GlobalContext } from "../services/GlobalState";
import "../styles/MyList.css";

function MyList() {
  const { watchlist } = useContext(GlobalContext);

  const showList = watchlist.map((item) => {
    return <Card contents={item} remove={true} />;
  });

  return (
    <div className="list-container" style={{ height: "100vh" }}>
      <h1>My List</h1>
      <div className="all-list">
        {showList.length === 0 ? (
          <p>No movies or TV shows in your list!</p>
        ) : (
          showList
        )}
      </div>
    </div>
  );
}

export default MyList;
