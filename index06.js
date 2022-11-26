// 6. Tem - se um conjunto de dados contendo a altura de 15 pessoas.Faça um programa que calcule e escreva:

const alturas = [1.51, 1.60, 1.55, 1.93, 1.82, 1.85, 1.69, 1.67, 1.66, 1.70, 1.71, 1.74, 1.79, 1.80, 1.83]
alturas.sort() // colocar numeros em ordem crescente
console.log(alturas)

let mediaAltura = 0

//  A média de altura;   ✔️
for (let i = 0; i < alturas.length; i++) {
    mediaAltura += alturas[i];
}
console.log(`O total da média de altura do grupo é: ${(mediaAltura / alturas.length)}`)
    // console.log(`O total da média de altura do grupo é: ${(mediaAltura / altura.length)}`)

//  A maior e a menor altura do grupo; ✔️
const maiorAltura = Math.max(...alturas)
const menorAltura = Math.min(...alturas)

console.log(`O mais alto tem: ${maiorAltura}, O mais baixo tem: ${menorAltura}`)

//  O número de pessoas com mais de 1.81 de altura. ✔️
const qtdMaiorQ181 = alturas.filter(n => n > 1.81)

console.log(qtdMaiorQ181)
console.log(`O número de pessoas com mais de 1.81 de altura é ${qtdMaiorQ181.length}`)