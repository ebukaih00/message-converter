let inputEl = document.getElementById("input-el")
let LengthEl= document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")




const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let  meters = inputEl.value * 3.281 
    let feet = inputEl.value / 0.3048

    let litres = inputEl.value * 0.219969
    let gallon = inputEl.value / 3.78541
  
    let kilos = inputEl.value * 2.20462
    let pounds = inputEl.value / 2.20462
LengthEl.textContent = `${inputEl.value} meters = ${meters.toFixed(3)} feet | ${inputEl.value} feet = ${feet.toFixed(3)} meters`
volumeEl.textContent = `${inputEl.value} litres = ${litres.toFixed(3)} gallon | ${inputEl.value} gallon = ${gallon.toFixed(3)} litres`
massEl.textContent = `${inputEl.value} kilos = ${kilos.toFixed(3)} pounds | ${inputEl.value} pounds = ${pounds.toFixed(3)} kilos`
})


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound