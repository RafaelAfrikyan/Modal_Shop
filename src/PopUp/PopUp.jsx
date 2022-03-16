import React from "react";
import "./PopUp.css";

function PopUp({
  item,
  data,
  image,
  id,
  title,
  windowClose,
  isPopUpOpen,
  totalCount,
  subCount,
  addCount,
  counter,
  setCounter,
  modal,
}) {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div>
      {isPopUpOpen && windowClose ? (
        <div className="PopUp" onClick={stopPropagation}>
          <h1>Orders </h1>
          {modal.map(
            (item) =>
              item.totalCount > 0 && (
                <div className="basketPop">
                  <div>
                    <img className="image" src={item.image}></img>
                    {item.title} - <b>{item.totalCount} </b>
                  </div>

                  <button
                    onClick={() => {
                      totalCount > 0 && subCount(id);
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => addCount(id)}> +</button>
                </div>
              )
          )}

          <h3>Total price: </h3>
          <button>Pay</button>
        </div>
      ) : null}
    </div>
  );
}

export default PopUp;
