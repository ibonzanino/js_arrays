// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays) {
  
  return arrays.flat();
}

console.log(myFunction([true, true], [1, 2], ['a', 'b']));

/* function myFunction(...arrays) {
  
  return [].concat(...arrays);
}

console.log(myFunction([true, true], [1, 2], ['a', 'b'])); */