function impares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

impares(19, 3)
impares(20, 4)