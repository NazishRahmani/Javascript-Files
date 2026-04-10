import React, { useState } from "react";
import data from "./components/data";
import Datas from "./components/Datas";
import "./App.css";
const App = () => {
  const [cardsData, setCardsData] = useState(data);

  function selector(card_id) {
    const newData = cardsData.filter((obj) => {
      return obj.id === card_id;
    });
    setCardsData(newData);
  }
  function deletor(card_id) {
    const newData = cardsData.filter((obj) => {
      return obj.id !== card_id;
    });
    setCardsData(newData);
  }
  if (cardsData.length == 0) {
    return (
      <div>
        <h2>No tour left</h2>
        <button onClick={() => setCardsData(data)}>Refresh Page</button>
      </div>
    );
  }

  return (
    <div className="trip-container">
      <h1 className="trip-head">University Trip</h1>
      <Datas data={cardsData} selector={selector} deletor={deletor} />
    </div>
  );
};

export default App;
