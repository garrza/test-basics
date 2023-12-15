const caesarCipher = (str, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const strArr = str.split("");
  const shiftedArr = strArr.map((letter) => {
    const letterIndex = alphabet.indexOf(letter);
    const shiftedIndex = letterIndex + shift;
    const newIndex = shiftedIndex % 26;
    return alphabet[newIndex];
  });
  return shiftedArr.join("");
};

export default caesarCipher;
