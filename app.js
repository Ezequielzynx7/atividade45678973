// Atividade prática – JavaScript básico
// Autor: [Seu nome]
// Data: [Data atual]
// Objetivo: praticar estruturas de controle e repetição

//Questão 1

const prompt = require('prompt-sync')()

let idade = prompt("Informe a Idade: ")

if(idade <= 18){
    console.log("Menor de Idade")
}else{
    console.log("Maior de Idade")
}

//Questão 2

const prompt = require('prompt-sync')()

let dia = (prompt("Informe O Dia da Semana: "))

switch(dia){
  case "1":
    console.log("Segunda")
    break
    case "2":
      console.log("Terça")
      break
      case "3":
        console.log("Quarta")
        break
        case "4":
            console.log("Quinta")
            break
            case "5":
                console.log("Sexta")
                break
                case "6":
                    console.log("Sabado")
                    break
                    case "7":
                        console.log("")
        default:
          console.log("Opção inválida")
}

//Questão 3

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//Questão 4

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite Um Número: "))

while(numero !== 0){
    console.log("Olá, Seja Bem vindo!")
    numero = parseInt(prompt("Digite o Número 0 pra sair  "))
}
console.log("Até Mais")


//Questão 5 

const prompt = require('prompt-sync')()

//senha correta
const senhac= "1234"
 
//senha digitada
let senha 

do{
    senha = prompt("Digite Sua Senha: ")
    if(senha !== senhac){
        console.log(senha,"Senha incoreta \n Tente novamente:")
    }

}while(senha !== senhac)

console.log("Senha Coreta ")

//teste
