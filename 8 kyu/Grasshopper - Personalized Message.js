function greet(name, owner) {
  if (name == owner) return "Hello boss";
  return "Hello guest";
}

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
