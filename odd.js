function isOdd(num) {
  let result
  let mod = num % 2

  if(mod === 1) {
    result = true
  }

  else { 
    result = false}

  return result

}


console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));