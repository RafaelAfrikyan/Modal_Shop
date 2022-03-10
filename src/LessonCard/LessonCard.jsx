import React, { useEffect, useState } from "react";
import "./LessonCard.css";

function LessonCard({ item, count, onAdd, onSubtract }) {
  return (
    <div className="LessonWrap">
      <p>{item.title}</p>
      <img src={item.image} alt="sorry"></img>
      <div className="buttons">
        <button onClick={onAdd}>+</button>

        <button onClick={onSubtract}>-</button>
        <h3> - {count}</h3>
      </div>
    </div>
  );
}

export default LessonCard;
