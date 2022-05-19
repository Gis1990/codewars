snail = function (array) {
  let result = [];
  if (array[0].length === 0) return [];

  while (array.length > 0) {
    array[0].slice(0, array[0].length - 1).forEach((i) => {
      result.push(i);
    });

    array.forEach((i) => {
      result.push(i[i.length - 1]);
    });
    array[array.length - 1]
      .slice(0, array[0].length - 1)
      .reverse()
      .forEach((i) => {
        result.push(i);
      });

    let firstElement = array.map((array) => {
      return array[0];
    });
    firstElement.shift();
    firstElement.pop();
    firstElement.reverse().forEach((i) => {
      result.push(i);
    });
    array.shift();
    array.pop();
    array.forEach((i) => i.pop());
    array.forEach((i) => i.shift());
  }
  return result;
};
console.log(snail([[3]]));
