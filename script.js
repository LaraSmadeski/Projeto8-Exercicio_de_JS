let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("A soma dos números é: " + sum)
alert("A subtração dos números é: " + sub)
alert("A multipicação dos números é: " + multi)
alert("A divisão dos números é: " + div)
alert("O resto da divisão dos números é: " + restDiv)

let parity = sum % 2
if(parity == 0) {
  alert("A soma dos dois números é par: " + sum)
} else {
  alert("A soma dos dois número é impar: " + sum)
}

if(numberOne == numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}