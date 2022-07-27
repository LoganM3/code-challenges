// Create a function that takes a Roman numeral as its argument and returns its 
// value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the numbe
// r to be encoded separately, starting with the leftmost digit and skipping any 0s. 
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered 
// "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each 
// letter in descending order.

function solution (roman) {
    
let key =[
        ['I',1],

        ['V', 5],

        ['X', 10],
   
        ['L', 50],

        ['C', 100],
    
        ['D', 500],
         
        ['M', 1000]
]
    
    let arr = roman.split()
    //console.log(arr)
//     let value = []
//     for(i = 0; i <= arr.length-1; i++){
       
//        console.log(arr)
//         for(j = 0; j <= key.length-1; j++){
//             if(arr[i] == key[j][0]){
//                 value.push(key[j][1])
//             }
            
//             const answer = value.map((value) => {
//             return value 
//         } )
//         }
        
//     }
   }

   console.log(solution('XXI'))