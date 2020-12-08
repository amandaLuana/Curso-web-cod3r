function vetor(numeros) {
    let qtdDentro = 0
    let qtdFora = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <=  20) {
            qtdDentro++
        } else {
            qtdFora++
        }
    }
    console.log(`${qtdDentro} quantidade dentro e ${qtdFora} quantidade fora`)
}

num = [1, 2, 3, 4, 10, 20, 15]
vetor(num)