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


function retornaLetraC() {
    let vetor = ['a', 'b', 'a', 'a', 'c', 'b']
    vetor.push('c')
    console.log(`Repetir letra c: ${vetor}`)
}
retornaLetraC()

// ===============================================================

// function repetirLetraC() {
//     const vetor = ['a', 'b', 'a', 'a', 'c', 'b']
//     const duplicarC = [...vetor, 'c']
//     console.log(`Repetir letra c dentro do array: ${duplicarC}`)
// }
// repetirLetraC()