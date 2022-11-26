// 8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// Receber a idade e a opinião de 15 espectadores de um cinema
const idades = [18, 20, 25, 17, 40, 39, 58, 65, 28, 21, 29, 21, 14, 32, 52]
const opinioes = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]

function otimoMedia(opinioes, idades) {
    let soma = 0
    let qtde = 0

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            soma += idades[i]
            qtde++
        }
    }
    return soma / qtde
}

function regularQtde(opinioes) {
    let qtde = 0

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 1) {
            qtde++
        }
    }
    return qtde
}

function bomPorcentagem(opinioes) {
    let qtde = 0

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            qtde++
        }
    }
    return (qtde / opinioes.length) * 100
}

// A média das idades das pessoas que responderam ótimo ✔️
console.log(`Resposta 8: Média de idades que Responderam ÓTIMO é ${otimoMedia(opinioes,idades)} anos`)

// a quantidade de pessoas que responderam regular; ✔️
console.log(`Resposta 8: Responderam REGULAR ${regularQtde(opinioes)} Pessoas`)

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados. ✔️
console.log(`Resposta 8: Responderam BOM ${bomPorcentagem(opinioes).toFixed(0)}% das Pessoas`)