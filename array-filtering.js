const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
const filtered = numbers.filter(function(number) {
  return (number % 2) === 0
}
)
*/
const filtered = numbers.filter(evenNumber)

function evenNumber(num) {
  return num % 2 === 0;
}

// seems like the .filter method passed each value in the array into the function by itself
console.log(filtered);