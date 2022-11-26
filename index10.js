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

alert(`
    HOMENS São ${homens[3]} Homens 
    Media Idade: ${homens[2]} anos
`)

alert(`
    MULHERES São ${mulheres[3]} 
    Mulheres Média de Pesos:  ${mulheres[0]}kg
`)