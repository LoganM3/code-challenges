//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
let arr1 =arr.sort((a,b) => a - b)
let result = []
 for(i = 0; i <= arr1.length-1; i++){
       if(arr1[i] != arr1[i+1]) result.push(arr1[i])
}
 return result
}

  console.log(findUniq( [0,0,0,0.45]))