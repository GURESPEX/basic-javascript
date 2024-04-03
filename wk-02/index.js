function createListOfNumber(number) {
  let num_array = [];
  for (let i = 0; i < number; i++) {
    num_array.push(i + 1);
  }
  return num_array;
}

console.log(createListOfNumber(5));
