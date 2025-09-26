 function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0; // or Math.abs(number % 2) === 1; for negative numbers
}

console.log(isEven(4)); 
console.log(isOdd(7));  
console.log(isEven(-2));
console.log(isOdd(-3));
console.log(isOdd(2));



function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("kennedy"));
console.log(reverseString("magical"));
console.log(reverseString("eclipse"));
console.log(reverseString("987654321"));
                         
                   
