import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({ item, subCount, count, price, id, addCount, data, setData }) {
  return (
    <div className="LessonWrap">
      <img src={item.image} alt="sorry"></img>
      <p>{item.title}</p>
      <div className="imgbotom">
        <h3>Price: {price} $ </h3>
        <div className="buttons">
          <button
            onClick={() => {
              subCount(id);
            }}
          >
            -
          </button>

          <button onClick={() => addCount(id)}> +</button>
          <br />
          <h3> Count: {count}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
