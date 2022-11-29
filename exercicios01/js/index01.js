//  1. Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.

const numeros = [5, 20, 35]
let total1 = 0

for (let i = 0; i < numeros.length; i++) {
    total1 += numeros[i];
}

console.log(`A media enter os numeros é: ${total1 / numeros.length}`)