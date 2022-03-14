import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Card from "./Card/Card";
import PopUp from "./PopUp/PopUp";

function App() {
  const [isPopUpOpen, setPopUp] = useState(false);
  const [windowClose, setWindowClose] = useState(true);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState({});

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
      .then((data) => setData(data));
    return (componentMounted = false);
  }, []);

  const addCount = (id, title) => {
    const count = cart[id] || 0;
    setCart({ ...cart, [id]: count + 1 });
  };

  const subCount = (id) => {
    const count = cart[id] || 0;
    setCart({ ...cart, [id]: count - 1 });
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
            count={cart[item.id] || 0}
            data={data}
            setData={setData}
            subCount={subCount}
          />
        ))}
      </div>
      <PopUp
        image={data.map((item) => item.image)}
        id={data.map((item) => item.id)}
        title={data.map((item) => item.title)}
        isPopUpOpen={isPopUpOpen}
        windowClose={windowClose}
        openPopUp={openPopUp}
        cart={cart}
        subCount={subCount}
        data={data}
      />
    </div>
  );
}

export default App;
