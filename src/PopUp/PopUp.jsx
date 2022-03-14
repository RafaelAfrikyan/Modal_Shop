import React from "react";
import "./PopUp.css";

function PopUp({
  item,
  data,
  id,
  title,
  windowClose,
  subCount,
  isPopUpOpen,
  cart,
}) {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div>
      {isPopUpOpen && windowClose ? (
        <div className="PopUp" onClick={stopPropagation}>
          <h1>Orders </h1>
          {Object.keys(cart).map((item) => (
            <p>
              {item} - {cart[item]}
            </p>
          ))}

          <h3>Total price: </h3>
          <button>Pay</button>
        </div>
      ) : null}
    </div>
  );
}

export default PopUp;
