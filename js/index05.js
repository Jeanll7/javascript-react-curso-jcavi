// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.

const nome1 = 'Jean'
const nota1 = 7
const nota2 = 10
    // const nota2 = 1 'Reprovado, Tente outra vez'
const nota3 = 9

let media1 = (nota1 + nota2 + nota3) / 3

if (media1 >= 8) {
    media1 = 'Aprovado, Parabéns😃'
} else {
    media1 = 'Reprovado, Tente outra vez'
}


console.log(`${nome1} você foi ${media1}`)