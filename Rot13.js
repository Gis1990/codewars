function rot13(message) {
  const alphabetUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const alphabetLower = alphabetUpper.map((letter) => letter.toLowerCase());
  let result = [];
  let len = message.length;
  for (let i = 0; i < len; i++) {
    if (
      alphabetUpper.includes(message[i]) ||
      alphabetLower.includes(message[i])
    ) {
      if (message[i] === message[i].toLowerCase()) {
        result.push(
          alphabetLower[(alphabetLower.indexOf(message[i]) + 13) % 26]
        );
      } else {
        result.push(
          alphabetUpper[(alphabetUpper.indexOf(message[i]) + 13) % 26]
        );
      }
    } else {
      result.push(message[i]);
    }
  }
  return result.join("");
}

console.log(rot13("test"));
