// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C. 

const a = 25
const b = 20

let c = null

if (a == b) {
    c = a + b
} else {
    c = a * b
}

console.log(`O valor de c é ${c}`)