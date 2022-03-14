import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Card from "./Card/Card";
import PopUp from "./PopUp/PopUp";

function App() {
  const [isPopUpOpen, setPopUp] = useState(false);
  const [windowClose, setWindowClose] = useState(true);
  const [data, setData] = useState([]);

  let componentMounted = true;

  function openPopUp() {
    if (isPopUpOpen) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  }

  function window() {
    if (isPopUpOpen) {
      setWindowClose(false);
      setPopUp(false);
    } else {
      setWindowClose(true);
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        setData([
          ...data,
          {
            ...data.map((item) => {
              item.totalCount = 0;
            }),
          },
        ])
      );
    return (componentMounted = false);
  }, []);

  console.log(data);

  const addCount = (id) => {
    setData([
      ...data.map((item) => {
        if (item.id === id) {
          item.totalCount++;
        }
        return item;
      }),
    ]);
  };

  const subCount = (id) => {
    setData([
      ...data.map((item) => {
        if (item.id === id) {
          item.totalCount--;
        }
        return item;
      }),
    ]);
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
          <Card
            id={item.id}
            item={item}
            key={item.id}
            price={item.price}
            addCount={addCount}
            totalCount={item.totalCount}
            data={data}
            setData={setData}
            subCount={subCount}
          />
        ))}
      </div>
      <PopUp
        item={data.map((item) => item)}
        id={data.map((item) => item.id)}
        isPopUpOpen={isPopUpOpen}
        windowClose={windowClose}
        openPopUp={openPopUp}
        data={data}
        subCount={subCount}
        addCount={addCount}
        totalCount={data.map((item) => item.totalCount)}
      />
    </div>
  );
}

export default App;
