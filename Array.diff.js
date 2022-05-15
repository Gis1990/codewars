function arrayDiff(a, b) {
  const result = [];
  for (let i=0;i<a.length;i++){
    if (b.includes(a[i])===false){
      result.push(a[i]);
    }}    return result
}