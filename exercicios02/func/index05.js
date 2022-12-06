// 5- Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1) e depois calcule a média de todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.

// aula
function calcularMedia(numeros) {
    let total = 0

    numeros.forEach(numero => {
        if (isNumerico(numero)) {
            total += numero
        } else {
            return 'Erro'
        }
    })
    return total / array.length
}

function isNumerico(valor) {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
}

// A média dos valores do array é ${(resultado)}


// exercício
let numArray = [2, 7, 15]

function mediaSomaArr(numeros) {
    let total = 0

    for (let i = 0; i < numeros.length; i++) {
        const element = numeros[i]
        total += element
    }

    let resultado = total / numeros.length
    return resultado
}

let resultado = mediaSomaArr(numArray)
console.log(`A média dos valores do array é ${resultado}`)