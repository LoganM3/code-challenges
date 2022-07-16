// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"



// function reverse(str){
// let arr = str.split('')
// let revArr = arr.reverse()
// let strRev = revArr.join('')

//     return strRev
// }
// console.log(reverse('The sky is blue'))




function reverse(str){
    let arr = str.split('')
    let revStr =''
    for(let i = arr.length -1; i >= 0; i--){
        revStr += arr[i]
    }
    return revStr
     
    }
    console.log(reverse('The sky is blue'))