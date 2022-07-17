// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let X = [];
  let O = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "x" || str[i]== "X") X.push(i);
    if (str[i] == "o" || str[i]== "O") O.push(i);
  }

  if (X.length == O.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xoxxox"));
console.log(XO("Xoxo"));
console.log(XO('fdfdis'))
