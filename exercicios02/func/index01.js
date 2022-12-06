// 1- Crie uma função que receba dois números como parâmetro, retorne a soma dos valores, em seguida execute a função mostrando na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'.

// aula
function somarNumeros(array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (isNumerico(element)) {
            total += element
        } else {
            return 'Erro'
        }
    }
    return total
}

function isNumerico(valor) {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
}

const numeros = [10, 20, 30, 40]
let resultado = somarNumeros(numeros)

console.log(`A soma dos valores é ${(resultado)}`)





// exercício
function somar(n1, n2) {
    return n1 + n2
}

console.log(`A soma dos valores é: ${somar(3, 4)}`)