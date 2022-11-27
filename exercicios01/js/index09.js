// 9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos. ✔️
const numerosPar = [2, 5, 6, 7, 10, 12, 15, 17, 18, 21];

function somaOsPares() {
    let soma = 0;
    for (let numPar = 1; numPar < numerosPar.length; numPar++) {
        if (!isNaN(numerosPar[numPar]) && numerosPar[numPar] % 2 === 0) {
            soma += numerosPar[numPar];
        }
    }
    console.log(`Resposta 9: A soma dos numeros pares é ${soma}`);
}
somaOsPares();

// A soma dos números primos.✔️
function calculaNumPrimo(num) {
    let quantDivisores = 0;
    for (let contador = 1; contador <= num; contador++) {
        let resto = num % contador;

        if (resto === 0) {
            quantDivisores++;
        }
        if (quantDivisores > 2) {
            return 0;
        }
    }
    if (quantDivisores === 2) {
        return num;
    }
}

let somaPrimos = 0;
for (let i = 2; i <= 21; i++) {
    somaPrimos += calculaNumPrimo(i);
}
console.log(`Resposta 9: A soma dos numeros primos é ${somaPrimos}`);