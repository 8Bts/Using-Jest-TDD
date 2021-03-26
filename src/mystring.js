const mystring = (() => {
  const capitalize = (str) => {
    const charArr = str.split('');
    if (/[a-z]/.test(charArr[0])) charArr[0] = charArr[0].toUpperCase();
    return charArr.join('');
  };

  const reverseString = (str) => str.split('').reverse().join('');

  return { capitalize, reverseString };
})();

export default mystring;