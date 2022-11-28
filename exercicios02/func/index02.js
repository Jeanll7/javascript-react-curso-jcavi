// 2- Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) e depois calcule a soma de  todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.

function somar2(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 1) {
            total += array[i]
        }
    }
    return total
}
let array = [10, 5, 10, 2]

console.log(`A soma dos valores do array é ${somar2(array)}`)