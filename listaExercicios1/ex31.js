function numerosNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }   
    return qtdNegativos
}

vetor = [1, 1, -2, -3, -8, 5, 6]
console.log(numerosNegativos(vetor))