const result = document.getElementById('result');
const firstNumber = document.getElementById('firstnumber');
const secondNumber = document.getElementById('secondnumber');
const operator = document.getElementById('operator');

const showResult = (value) =>{
    result.innerHTML = `<b>${value}</b>`
}

// make sum 
const sum = () => {
let total = parseInt(firstNumber.value) + parseInt(secondNumber.value)
showResult(total);
}

    
const subtract = () => {
        let total = parseInt(firstNumber.value) - parseInt(secondNumber.value)
        showResult(total);
        }

const multiply = () => {
            let total = parseInt(firstNumber.value) * parseInt(secondNumber.value)
            showResult(total);
            }


// button
const buttons = document.getElementsByClassName('operator');
console.log(buttons)