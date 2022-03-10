import React from "react";
import "./PopUp.css";

function PopUp({ item, count, openPopUp, isPopUpOpen }) {
  return (
    <>
      {isPopUpOpen ? (
        <div className="PopUp">
          <h3>{count}</h3>
          <button onClick={openPopUp}>X</button>
        </div>
      ) : null}
    </>
  );
}

export default PopUp;
