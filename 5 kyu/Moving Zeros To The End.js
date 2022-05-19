function moveZeros(arr) {
  const result = [];
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      n += 1;
    } else {
      result.push(arr[i]);
    }
  }
  while (n > 0) {
    result.push(0);
    n--;
  }
  return result;
}
