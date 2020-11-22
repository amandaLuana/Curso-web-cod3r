// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(8, 9)
imprimirSoma(2) // undefined + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6, 7) // pega apenas os dois primeiros números
imprimirSoma() // NaN

// Função com retorno 
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

