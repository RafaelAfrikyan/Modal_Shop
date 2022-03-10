import React, { useState } from "react";
import "./App.css";
import NavBar from "./Navbar/Navbar";
import LessonCard from "./LessonCard/LessonCard";
import PopUp from "./PopUp/PopUp";

function App() {
  const [isPopUpOpen, setPopUp] = useState(false);
  const [windowClose, setWindowClose] = useState(true);

  function window() {
    if (isPopUpOpen) {
      setWindowClose(false);
      setPopUp(false);
    } else {
      setWindowClose(true);
    }
  }

  const [data, setData] = useState([]);
  let getData = fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setData(data));

  // const data = [
  //   { id: 1, title: "Gago" },
  //   { id: 2, title: "Haso" },
  //   { id: 3, title: "Egho" },
  //   { id: 4, title: "Suro" },
  //   { id: 5, title: "Tiko" },
  //   { id: 6, title: "Haso" },
  //   { id: 7, title: "Egho" },
  //   { id: 8, title: "Suro" },
  // ];

  function openPopUp() {
    if (isPopUpOpen) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  }

  const [count, setCount] = useState(0);

  const onAdd = () => setCount((count) => count + 1);

  const onSubtract = () => {
    if (count) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="wrapper" onClick={window}>
      <NavBar
        openPopUp={openPopUp}
        isPopUpOpen={isPopUpOpen}
        setPopUp={setPopUp}
      />
      <div className="cardsWrap">
        {data.map((item) => (
          <LessonCard
            id={item.id}
            item={item}
            key={item.id}
            count={count}
            onAdd={onAdd}
            onSubtract={onSubtract}
            price={item.price}
          />
        ))}
      </div>
      <PopUp
        isPopUpOpen={isPopUpOpen}
        windowClose={windowClose}
        openPopUp={openPopUp}
      />
    </div>
  );
}

export default App;
