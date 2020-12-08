function notas(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    notas.sort((a, b) => a < b ? 1 : - 1)


    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código: ${codigo} ${media < 5 ? 'Reprovado' : 'Aprovado'}`)
}

notas(10, 2.7, 5.6, 8,7)
notas(11, 2, 3, 2)