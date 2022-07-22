// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when
//  more than one word is present.

function rev5(str){
    let arr1 = str.split(' ')
    let results = ''
    arr1.map((sent,i) => {
        if(sent.length >= 5){
            arr1[i]= sent.split('').reverse('').join('')
        }
        results = arr1.join(' ')
    })

    return results
}

let string = 'Hey fellow warriors'
console.log(rev5(string))