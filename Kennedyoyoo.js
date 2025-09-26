 function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0; // or Math.abs(number % 2) === 1; for negative numbers
}

// Test cases
console.log(isEven(4)); 
console.log(isOdd(7));  
console.log(isEven(-2));
console.log(isOdd(-3));
console.log(isOdd(2));
