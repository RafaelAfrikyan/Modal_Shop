



const addCartStateHandler = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id) {
            console.log(item, el);
            return { ...item, totalCount: item.totalCount + 1 };
          }
          return item;
        });
      });
    } else {
      setCartState((prev) => [...prev, el]);
    }
  };
  const subtractCartStateHandler = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id && el.totalCount > 0) {
            return { ...item, totalCount: item.totalCount - 1 };
          }
          return item;
        });
      });
    }
  };




