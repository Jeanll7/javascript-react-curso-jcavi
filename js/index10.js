// Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// média das idades dos homens;
// total de mulheres;
// média dos pesos das mulheres.
let pesoTotal = [62, 72, 83, 64, 70, 66, 77, 88, 81, 110]
let idades2 = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
let generos = ['M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F']

let totalHomens = 0
let totalIdadeHomens = 0
let totalMulheres = 0
let mediaPessoMulheres = 0

for (let i = 0; i < generos.length; i++) {
    const genero = generos[i];
    const idade = idades2[i];
    const peso = pesoTotal[i];

    if (genero === 'M') {
        totalIdadeHomens += idade
        totalHomens++
    }
    if (genero === 'F') {
        mediaPessoMulheres += peso
        totalMulheres++
    }
}

console.log(`
    Total de homens ${totalHomens} 
    Total idade homens ${totalIdadeHomens} anos
    Total de mulheres ${totalMulheres} 
    Média dos pesos das mulheres ${mediaPessoMulheres}kg
`)