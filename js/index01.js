//  1. Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.

// const n1 = 5
// const n2 = 33
// const n3 = 25
// const media = (n1 + n2 + n3) / 3
// console.log(`A media é: ${media}`)

let numeros = [5, 33, 25]
let total = 0

for (let i = 0; i < numeros.length; i++) {
    total = numeros[i] + total;
}

console.log(`A media enter os numeros é: ${total / numeros.length}`)