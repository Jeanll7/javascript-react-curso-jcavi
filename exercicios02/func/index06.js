// 6- Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:
// let vetor = ["a", "b", "a", "a", "c", "b"]
// Aqui, temos:
//  vetor[0] = "a"; 
//  vetor[1] = "b";
//  vetor[2] = "a";
//  vetor[3] = "a";
//  vetor[4] = "c";
//  vetor[5] = "b";
// Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento.

// aula
let vetor = ["a", "b", "a", "a", "c", "b"]

function verificarItemIsolado() {
    let itemIsolado = null

    //a
    letras.forEach(letra => {
        letNumeroRepeticoes = 0

        letra.forEach(letraComparacao => {
            if (letra == letraComparacao) {
                letNumeroRepeticoes++
            }
        });

        if (letNumeroRepeticoes === 1) {
            itemIsolado == letra
        }
    });
    if (itemIsolado) {
        return itemIsolado
    } else {
        return 'Não existe itens isolados no array'
    }
}



// execício
function retornaLetraC() {
    let vetor = ['a', 'b', 'a', 'a', 'c', 'b']
    vetor.push('c')
    console.log(`Repetir letra c: ${vetor}`)
        // return vetor
}
retornaLetraC()

// ===============================================================

// function repetirLetraC() {
//     const vetor = ['a', 'b', 'a', 'a', 'c', 'b']
//     const duplicarC = [...vetor, 'c']
//     console.log(`Repetir letra c dentro do array: ${duplicarC}`)
// }
// repetirLetraC()