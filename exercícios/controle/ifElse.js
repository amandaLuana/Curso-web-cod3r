const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(8)
imprimirResultado(5)
imprimirResultado('Epa!') // vai tentar comparar a string e vai retornar false por não ser maior ou igual a 7
