const mystring = (() => {
  const capitalize = (str) => {
    const charArr = str.split('');
    if(/[a-z]/.test(charArr[0])) charArr[0] = charArr[0].toUpperCase();
    return charArr.join('');
  };

  const reverseString = (str) => {
    const charArr = str.split('');
    const result = [];

    for(let i = charArr.length - 1; i >= 0; i--){
      result.push(charArr[i]);
    }

    return result.join('');
  };

  return { capitalize, reverseString };
})();

export default mystring;