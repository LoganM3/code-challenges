//Given a random non-negative number, you have to return the 
//digits of this number within an array in reverse order.



function digitize(n) {
  let str = n.toString()
  let arr = str.split('')
  let arr2 = arr.reverse()
  let backarr = arr2.map(Number)
  return backarr
}

console.log(digitize(348597))