const addCount = (id) => {
  setData((prev) => {
    return prev.map((item) => {
      if (item.id === id) {
        item.count++;
      }
    });
  });
};
