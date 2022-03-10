import React, { useEffect, useState, price } from "react";
import "./LessonCard.css";

function LessonCard({ item, count, onAdd, onSubtract }) {
  return (
    <div className="LessonWrap">
      <img src={item.image} alt="sorry"></img>
      <p>{item.title}</p>

      <div className="imgbotom">
        <h3>Price -{item.price} $ </h3>
        <div className="buttons">
          <button onClick={onAdd}>+</button>

          <button onClick={onSubtract}>-</button>
          <br />
          <h3> Count - {count}</h3>
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
