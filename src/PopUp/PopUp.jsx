import React from "react";
import "./PopUp.css";

function PopUp({
  item,
  data,
  id,
  title,
  windowClose,
  isPopUpOpen,
  totalCount,
  subCount,
  addCount,
  counter,
  setCounter,
}) {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div>
      {isPopUpOpen && windowClose ? (
        <div className="PopUp" onClick={stopPropagation}>
          <h1>Orders </h1>
          {data.map(
            (item) =>
              item.totalCount > 0 &&
              (
                <div>
                  {item.title} - {item.totalCount}
                  <button
                    onClick={() => {
                      totalCount > 0 && subCount(id);
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => addCount(id)}> +</button>
                </div>
              ), 
          )}

          <h3>Total price: </h3>
          <button>Pay</button>
        </div>
      ) : null}
    </div>
  );
}

export default PopUp;
