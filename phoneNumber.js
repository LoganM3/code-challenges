//Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
let phoneArr = [8, 5, 3, 2, 6, 8, 0, 0, 6, 4];
function phoneNumber(arr) {
  let PhoneNum =
    "(" +
    arr[0] +
    arr[1] +
    arr[2] +
    ")" +
    " " +
    arr[3] +
    arr[4] +
    arr[5] +
    "-" +
    arr[6] +
    arr[7] +
    arr[8] +
    arr[9];

  return PhoneNum;
}

console.log(phoneNumber(phoneArr));
