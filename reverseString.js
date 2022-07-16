// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"



function reverse(str){
let arr = str.split('')
let revArr = arr.reverse()
let strRev = revArr.join('')

    return strRev
}
console.log(reverse('The sky is blue'))