const ship = (length) => {
  let hits = 0;
  let isSunkStatus = false;

  const hit = () => {
    hits++;
    if (hits === length) {
      isSunkStatus = true;
    }
  };

  const isSunk = () => {
    return isSunkStatus;
  };

  return {
    hits,
    length,
    hit,
    isSunk,
  };
};
