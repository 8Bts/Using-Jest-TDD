const calculator = (() => {
  const add = (...args) => args.reduce((acc, val) => acc + val);

  const subtract = (...args) => args.reduce((acc, val) => acc - val);

  const multiply = (...args) => args.reduce((acc, val) => acc * val);

  const divide = (...args) => Math.floor(args.reduce((acc, val) => acc / val));

  return {
    add, subtract, multiply, divide,
  };
})();

export default calculator;