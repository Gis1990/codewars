function digitize(n) {
  let result=n.toString().split('').map(Number)
  return  result.reverse()
}