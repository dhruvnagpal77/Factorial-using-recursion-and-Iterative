//O(n)
function findFactorialResursive(number) {
 if (number == 1 || number == 0 ) {
    return 1;
  }
  else if (number < 0) {
    return 'Cannot find factorial of -ve number'
  }
  return number * findFactorialResursive(number - 1);
}

//O(n)
function findFactorialIterative(number) {
 if (number < 0) {
    return 'Cannot find factorial of -ve number'
  }
  let factorial = 1;
  for (let i = number; i >= 2; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(findFactorialResursive(5));
console.log(findFactorialIterative(5));