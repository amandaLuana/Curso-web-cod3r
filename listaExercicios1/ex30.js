function maiorMenor(numero) {
    let maior
    let menor

    for (let i = 0; i < numero.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = numero[i]
            menor = numero[i]
        } else {
            if (numero[i] > maior) {
                maior =  numero[i]
            }
            if (numero[i] < menor) {
                menor = numero[i]
            }
        }
    }
    return [maior, menor]
}

numero = [10, 5, 1, 50]
console.log(maiorMenor(numero))