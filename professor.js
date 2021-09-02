
function camposValidos(){
    return document.querySelector("form").reportValidity()
}

function CalcularIMC (peso, altura){
    return peso / (altura ** 2)
}

function classificar (imc){
    let categoria 
    if(imc < 18.5){
        categoria = "abaixo do peso"
    }
    else if (imc < 25){
        categoria = "com peso ideal, <span class='color'>parabens!</span>"
    }
    else if (imc < 30){
        categoria = "levemente acima do peso"
    }
    else if (imc < 35){
        categoria = "com Obesidade Grau I"
    }
    else if (imc < 40){
        categoria = "com Obesidade Grau II"
    }
    else{
        categoria = "com Obesidade Grau III"
    }
    return categoria
}

function exibirResultado(){
    const resultado = document.getElementById("result")
    const nome = document.getElementById("nomePessoa").value
    const altura = document.getElementById("altura").value.replace(",",".")
    const peso = document.getElementById("peso").value.replace(",",".")
    
    
    if(camposValidos()){
        const imc = CalcularIMC (peso, altura)
        const classificacao = classificar (imc)
        resultado.innerHTML = `${nome} seu imc é ${imc.toFixed(2)} e você está ${classificacao}`
    }
    else{
        resultado.textContent = "Preencha os campos!"
    }
}

function capturaEnter(evento){
    if (evento.key === "Enter"){
        exibirResultado()
    }
}

// document.querySelector(#nome) localiza as tags, pelo nome, id, ou classe.

//evento
document.getElementById("imcBtn").addEventListener("click", exibirResultado)

document.querySelector("form")
    .addEventListener("keypress", capturaEnter)