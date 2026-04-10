import React from "react";
import Card from "./Card";
const Datas = ({ data , selector,deletor }) => {
    
  return (
    <div className="container">
      {data.map((obj) => {
        return <Card da={obj} selector={selector}  deletor={deletor}/>;
      })}
    </div>
  );
};

export default Datas;
