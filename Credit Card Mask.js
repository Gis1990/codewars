function maskify(cc) {
  let result = "";
  if (cc.length < 4) {
    return cc;
  } else {
    for (let i = 0; i < cc.length - 4; i++) {
      result += "#";
    }
  }
  return result + cc.slice(cc.length - 4);
}

console.log(maskify("4556364607935616"));
