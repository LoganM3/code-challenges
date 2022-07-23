//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const vowels = ['a','e','i','o','u' ] 

function countVowel(str){
    let count = 0
    for(let letter of str.toLowerCase()){
        if( vowels.includes(letter)){
            count ++
        }
    }
    return count
    }
console.log(countVowel('how are you'))