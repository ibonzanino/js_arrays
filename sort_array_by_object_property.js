// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction(arr) {
  
  return arr.sort((x, y) => x.b - y.b);
}

console.log(myFunction([{a:1, b:7}, {a:2, b:1}]));
