let idade = Number(prompt("Quantos anos você tem?"))
console.log(idade)

let ensinoMedio =Boolean(prompt("Você terminou o ensino médio?"))

let cursandoFaculdade =Boolean(prompt("Você está cursando alguma faculdade?"))


if(idade>=18){
    console.log("Você é maior de idade.")
    alert("Você é maior de idade")
}
 else{
console.log("Você é menor de idade")
alert("Você é menor de idade")
}


if(ensinoMedio === true){
    console.log("Você terminou o ensino médio")
       alert("Você terminou o ensino médio!")
} else {
    console.log("Você não terminou o ensino médio")
    alert("Você não terminou o ensino médio")
}

if(cursandoFaculdade === true){
    console.log("Você está cursando outra faculdade")
    alert("Você está cursando faculdade")
} else {
    console.log("Você não está cursando outra faculdade")
    alert("Você não está cursando faculdade")
}
