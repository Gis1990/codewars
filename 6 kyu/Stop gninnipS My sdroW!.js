function spinWords(string) {
  let words = string.split(" ");
  const len = words.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (words[i].length >= 5) {
      result.push(words[i].split("").reverse().join(""));
    } else {
      result.push(words[i]);
    }
  }
  return result.join(" ");
}
