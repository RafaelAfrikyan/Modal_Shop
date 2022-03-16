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
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      .then((data) => {
        setFilteredProducts(data);
        setData(data.map(item => {
          return { ...item, totalCount: 0 }
        }))
      }
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

  // const addCountModal = (id) => {
  //   setData([
  //     ...modal.map((item) => {
  //       if (item.id === id) {
  //         item.totalCount++;
  //       }
  //       return item;
  //     }),
  //   ]);
  // };

  console.log(data)

  return (
    <div className="wrapper" onClick={window}>
      <NavBar
        openPopUp={openPopUp}
        isPopUpOpen={isPopUpOpen}
        setPopUp={setPopUp}
        counter={counter}
        setCounter={setCounter}
      />

      <div className="filterButton">
        <button
          onClick={() => {
            console.log(data);
            setFilteredProducts(prev => data);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilteredProducts(
              data.filter((item) => item.category === "men's clothing")
            );
          }}
        >
          Mens
        </button>
        <button
          onClick={() => {
            setFilteredProducts(
              data.filter((item) => item.category === "jewelery")
            );
          }}
        >
          Jewelery
        </button>
        <button
          onClick={() => {
            setFilteredProducts(
              data.filter((item) => item.category === "electronics")
            );
          }}
        >
          Electronics
        </button>
      </div>

      <div className="cardsWrap">
        {filteredProducts.map((item) => (
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
        item={modal.map((item) => item)}
        id={modal.map((item) => item.id)}
        image={modal.map((item) => item.image)}
        isPopUpOpen={isPopUpOpen}
        windowClose={windowClose}
        openPopUp={openPopUp}
        totalCount={modal.map((item) => item.totalCount)}
        modal={modal}
        addCountModal={addCount}
        subCountModal={subCount}
      />
    </div>
  );
}

export default App;
