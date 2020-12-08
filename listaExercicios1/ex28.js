function parImpar(numero) {
    let qtdPares = 0
    let qtdImpares = 0

    for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
        qtdPares++
    } else {
        qtdImpares++
    }
    }
    console.log(`${qtdPares} número pares e ${qtdImpares} números impares`)
}

vetor = [1, 2, 3, 4, 5, 6, 7]
parImpar(vetor)