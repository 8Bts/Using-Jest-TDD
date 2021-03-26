
const isAlphabetic = (char) => /[A-Za-z]/.test(char);

const isUpperCase = (char) => (char === char.toUpperCase);

const caesar = (str) => {
  const charArr = str.split('');
  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const char of charArr) {
    if (!isAlphabetic(char)) {
      result.push(char);
    } else if (char === 'z') {
      result.push('a');
    } else if (char === 'Z') {
      result.push('A');
    } else if (isUpperCase(char)) {
      result.push(String.fromCharCode(char.charCodeAt(0) + 1).toLocaleUpperCase);
    } else {
      result.push(String.fromCharCode(char.charCodeAt(0) + 1));
    }
  }

  return result.join('');
};

export default caesar;