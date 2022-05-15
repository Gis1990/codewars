function abbrevName(name){
  let initial= name.split(" ")
  return initial [0][0].toUpperCase() + "." + initial [1][0].toUpperCase()
}