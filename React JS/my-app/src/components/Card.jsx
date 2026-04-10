import React, { useState } from "react";
import "../App.css";

const Card = ({ da, selector,deletor }) => {
  
  const [more, setMore] = useState(true);
  const [readInfo, setReadInfo] = useState("Read More");

  const imgLink = da.imageLink;
  const price = da.price;
  const place = da.place;
  const info = da.info;
  const id = da.id;
  const inform = more == true ? `${info.substring(0, 200)}...` : info;

  function readHandle() {
    if (more) {
      setMore(false);
      setReadInfo("Read Less");
    } else{
      setMore(true);
      setReadInfo("Read More");
    }
  }

  return (
    <div className="card-box">
      <img src={imgLink} alt="" />
      <h4>{place}</h4>
      <h4>{price}</h4>
      <p>
        {inform}
        <span onClick={readHandle}  className="blue">
         {readInfo}
        </span>
      </p>
      <div className="btn-container">
        <button onClick={()=>selector(id)}>Interested</button>
        <button onClick={()=>deletor(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Card;
