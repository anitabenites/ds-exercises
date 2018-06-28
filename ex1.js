//exercise1: Write a javascript program to find all prime numbers up to some limit n.

var findPrimeNumbers = function(limit) { // a limit is a max
//console.log(limit)
var list = [];
for (var i = 1; i <= limit; i++) {
  //console.log(i);
  //continue
  /*
  if (i === 1) {
  //do nothing
} else if ( i === 2) {
  list.push(i) // prime
} else {
    */
  if(isPrime(i)) { // i is the argument that I am sending it from the current value of i - from the loop.
    list.push(i);
  }
}
console.log(list); // 2,3,5,7
return(list);
}

// is prime, only divisible by itself and 1
// function isPrime(n) { n is the placeholder: // n is whatever number that is in the currently i loop we are testing.
//  console.log('testing', n) // will be 3 to start with.
//  // let say in this iteration, i = 3
//  for ( var j = 2; i < n; j++) { // 2 because I need to start dividing with "2"
//   // console.log(`doing ${n} / ${j}...``)
//    if ( n % j == 0) // i.e: 3/2 when i = 3 from above... 3 % 2 = 1, i.e goes in once, with remainder 1
//    return false
//  }
//  return true
// }
// // i.e: 3 / 2 = 1.5, i.e. remainder ... so primeNumbers.


function isPrime(number) {
  switch (number) {
    case 1: // if (number == 1)
      return false
    case 2: // if (number == 2)
      break;
    default:
    // i is any number if it is not 1 or 2
    for (var i = 2; i < number; i++) { // this loop is responsible for the modulo test!
      if (number % i == 0) { // say number is 4 .... 4 % 2 = 0, because 4 / 2 = 2 exactly.
        return false
      }
    }
  }
  return true
}

// limit = 5 => 1,2,3,4,5
// range = 5,15 => 5,6,7,8,9,10,11,12,13,14,15
findPrimeNumbers(10);
