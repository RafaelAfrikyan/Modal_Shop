import React from "react";
import "./PopUp.css";

function PopUp({ item, windowClose, count, openPopUp, isPopUpOpen }) {
  return (
    <>
      {isPopUpOpen && windowClose ? (
        <div className="PopUp">
          <h3>{count}</h3>
          <button onClick={openPopUp}>X</button>
        </div>
      ) : null}
    </>
  );
}

export default PopUp;
