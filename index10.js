// 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:

// const pesos = [62, 72, 83, 64, 70, 66, 77, 88, 81, 110]
// const idadesGeral = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
// const genero = ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F']

// const homens = mediasGeral(genero, idadesGeral, pesos, 'M')
// const mulheres = mediasGeral(genero, idadesGeral, pesos, 'F')

// function mediasGeral(genero, idadesGeral, pesos, seletor) {
//     let pesoSoma = 0
//     let idadeSoma = 0
//     let idadeMedia = 0
//     let qtde = 0

//     for (let i = 0; i < genero.length; i++) {
//         if (genero[i] === seletor) {
//             qtde++
//             pesoSoma += pesos[i]
//             idadeSoma += idadesGeral[i]
//         }
//     }
//     idadeMedia = idadeSoma / qtde
//     return [pesoSoma, idadeSoma, idadeMedia, qtde]
// }

// // total de homens;
// // média das idades dos homens;
// console.log(`Resposta 10: \nHOMENS \nSão ${homens[3]} Homens \nMedia Idade: ${homens[2]} anos`)
//     // total de mulheres;
//     // média dos pesos das mulheres.
// console.log(`MULHERES \nSão ${mulheres[3]} Mulheres \nMédia de Pesos:  ${mulheres[0]}kg`)


// Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
const pesos = [62, 72, 83, 64, 70, 66, 77, 88, 81, 110]
const idadesGeral = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
const genero = ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F']


let pesoSoma = 0
let idadeSoma = 0
let idadeMedia = 0
let qtde = 0

for (let i = 0; i < genero.length; i++) {
    if (genero[i] === seletor) {
        qtde++
        pesoSoma += pesos[i]
        idadeSoma += idadesGeral[i]
    }
}
idadeMedia = idadeSoma / qtde


// total de homens;
// média das idades dos homens;
alert(`HOMENS \nSão ${homens[3]} Homens \nMedia Idade: ${homens[2]} anos`)
    // total de mulheres;
    // média dos pesos das mulheres.
alert(`MULHERES \nSão ${mulheres[3]} Mulheres \nMédia de Pesos:  ${mulheres[0]}kg`)