let celsiusInput = document.querySelector('#cel > input')
let fahrenheitInput = document.querySelector('#fah > input')
let kelvinInput = document.querySelector('#kel > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let c = parseFloat(celsiusInput.value)
    let f = (c*(9/5)) + 32
    let k = c + 273.15

    fahrenheitInput.value = roundNumber(f)
    kelvinInput.value = roundNumber(k)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let f = parseFloat(fahrenheitInput.value)
    let c = (f - 32) * (5/9)
    let k = (f -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(c)
    kelvinInput.value = roundNumber(k)
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let k = parseFloat(kelvinInput.value)
    let c = k - 273.15
    let f = (k - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(c)
    fahrenheitInput.value = roundNumber(f)
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})