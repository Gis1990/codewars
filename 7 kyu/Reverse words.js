function reverseWords(str) {
  let words = str.split(' ');
  const len=words.length
  for (let i = 0; i < len; i++) {
    words[i] = words[i].split('').reverse().join('');
  }return words.join(' ')
}