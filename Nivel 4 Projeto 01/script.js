let optional = 1

alert(`Agora iremos mostrar a soma, subtração, multiplicação,
divisão, resto da divisão, se a soma dos dois números é par ou ímpar
e se os dois números são iguais ou não dos números que você vai inserir.`)

while(optional == 1){

  let numOne = Number(prompt(`Digite o primeiro número`))
  let numTwo = Number(prompt(`Digite o segundo número`))

  let sum = numOne + numTwo
  let sub = numOne - numTwo
  let mul = numOne * numTwo
  let div = numOne / numTwo
  let res = numOne % numTwo
  let ver = sum % 2

  alert(`A soma é: ${sum}
  A subtração é: ${sub}`)

  alert(`A multiplicação é: ${mul}
  A divisão é: ${div.toFixed(2)}
  O que sobra da divisão é: ${res}`)

  if(ver === 1){
    alert("A soma dos dois números resulta em Ímpar")
  }else{
    alert("A soma dos dois números resulta em Par")
  }

  if(numOne == numTwo){
    alert("Os dois números são iguais")

  }
  else{
    alert("Os dois número não são iguais")
  }

  optional = prompt(`Digite 1 caso queira fazer os cálculos novamente ou qualquer outra tecla para sair`)
}