let optional = 0
let students = [];

function calculo(student) {
  let final = (student.oneNot + student.secNot) / 2
  if(final >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é ${final}
Parabéns você passou, bora evoluir`)}
else{
  alert(`A média do(a) aluno(a) ${student.name} é ${final}
Que pena, fica para proxima`)
}
}

alert(`Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.`)

while (optional != 3 ){


optional = Number(prompt(`Digite a opção desejada:
1.Adicionar um novo aluno
2.Listar alunos aprovados e reprovados
3.Sair do programa`))


switch(optional){

  case 1:
    
    let adcStudent = {
    name : prompt("Qual o nome do aluno"),
    oneNot : Number(prompt("Qual a primeira nota")),
    secNot : Number(prompt("Qual a segunda nota"))
    }

    students.push(adcStudent)

  break;

  case 2:
    if(students.length == 0){
      alert(`Nenhum aluno cadastrado`)
    }
    else{
      for(let student of students)
      calculo(student)
      }
  
  break;

  case 3:

    alert(`Obrigado por usar nosso programa`)

  break;

  default:
   alert(`Você digitou um número que não está na lista.`) 

}

}