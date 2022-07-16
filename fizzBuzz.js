// The FizzBuzz problem is a classic test given in coding interviews.
// The task is simple: Print integers 1 to N, but print "Fizz"
// if an integer is divisible by 3, "Buzz" if an integer is divisible by 5, and "FizzBuzz"
// if an integer is divisible by both 3 and 5.

function FizzBuzz(x) {
  let results = [];
  for (let i = 1; i <= x; i++) {
    if (i % 15 == 0) results.push("FizzBuzz");
    else if (i % 3 == 0) results.push("Fizz");
    else if (i % 5 == 0) results.push("Buzz");
    else results.push(i);
  }
  return results;
}
let fizzResults = FizzBuzz(15);
for(let i = 0; i < fizzResults.length; i++){
    console.log(fizzResults[i])
}


//let list = fizzResluts.join("\n" );
console.log();
