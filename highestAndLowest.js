// In this little assignment you are given a string of space 
//separated numbers, and have to return the highest and lowest number

// function highAndLow(number){
//     let arr = number.split(' ')
//    return Math.min(...arr) + ' ' + Math.max(...arr)
// }




// highAndLow("1 2 3 4 5");  // return "5 1"

function highAndLow(numbers){
    let arr = numbers.split(' ')
    //let arstr.map(arr)
    return Math.min(...arr) + " " + Math.max(arr)
}


console.log(highAndLow("1 9 3 4 -5"))