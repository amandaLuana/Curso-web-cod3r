function notas(nota) {
    let notaArredondada = arredondar(nota)
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}`)
    } else {
        console.log(`Reprovador com nota ${notaArredondada}`)
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

notas(100)
notas(30)
notas(38)
notas(88)
notas(61)
