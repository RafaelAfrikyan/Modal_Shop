import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Card from "./Card/Card";
import PopUp from "./PopUp/PopUp";

function App() {
  const [isPopUpOpen, setPopUp] = useState(false);
  const [windowClose, setWindowClose] = useState(true);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState([]);
  const [modal, setModal] = useState([]);

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
  console.log(counter);

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

  const addCount = (id) => {
    setData([
      ...data.map((item) => {
        if (item.id === id) {
          item.totalCount++;
          if (modal.find((el) => el.id === item.id)) {
            setModal((modal) => {
              return modal.map((el) => {
                if (el.id === item.id) {
                  return { ...el, totalCount: item.totalCount };
                }
                return el;
              });
            });
          } else {
            setModal((modal) => [...modal, item]);
          }
        }
        return item;
      }),
    ]);
  };
  console.log(modal);

  const subCount = (id) => {
    setData([
      ...data.map((item) => {
        if (item.id === id) {
          item.totalCount--;
          if (modal.find((el) => el.id === item.id)) {
            setModal((modal) => {
              return modal.map((el) => {
                if (el.id === item.id) {
                  return { ...el, totalCount: item.totalCount };
                }
                if (el.id === item.id && item.totalCount === 0) {
                  setModal((modal) => modal.splice(el, 1));
                }
                return el;
              });
            });
          } else {
            setModal((modal) => [...modal, item]);
          }
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
        counter={counter}
        setCounter={setCounter}
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
            counter={counter}
            setCounter={setCounter}
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
        setData={setData}
        totalCount={data.map((item) => item.totalCount)}
        counter={counter}
        setCounter={setCounter}
        addCount={addCount}
        subCount={subCount}
      />
    </div>
  );
}

export default App;
