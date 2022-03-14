import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({
  item,
  subCount,
  totalCount,
  price,
  id,
  addCount,
  data,
  setData,
}) {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="LessonWrap" onClick={stopPropagation}>
      <img src={item.image} alt="sorry"></img>
      <p>{item.title}</p>
      <div className="imgbotom">
        <h3>Price: {price} $ </h3>
        <div className="buttons">
          <button
            onClick={() => {
              totalCount > 0 && subCount(id);
            }}
          >
            -
          </button>
          <button onClick={() => addCount(id)}> +</button>
          <br />
          <h3> Count: {totalCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
