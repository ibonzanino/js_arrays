// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  
  return a.reduce((sum, cur) => cur > b ? sum + cur : sum, 0)

}

console.log(myFunction([78, 99, 100, 101, 401], 99))
