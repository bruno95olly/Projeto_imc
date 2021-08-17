const nome = document.getElementById("nomePessoa")
const peso1 = document.getElementById("peso")
const altura1 = document.getElementById("altura")
const resultado = document.getElementById("result")
const imc = document.getElementById("imcBtn")

function imc1(){
     resultado.textContent = nome.value + " seu imc é: "+ (peso1.value / (altura1.value * altura1.value)).toFixed(2)
}

imc.addEventListener("click", imc1)

