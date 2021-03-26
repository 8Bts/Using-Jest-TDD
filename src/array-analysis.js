const analize = (arr) => {
  const min = (() => {
    let min = arr[0];
    arr.forEach(element => {
      if (element < min) min = element;
    });
    return min;
  })();

  const max = (() => {
    let max = arr[0];
    arr.forEach(element => {
      if (element > max) max = element;
    });
    return max;
  })();

  const average = arr.reduce((acc, elem) => acc + elem) / arr.length;

  const { length } = arr;

  return {
    min, max, average, length,
  };
};

export default analize;