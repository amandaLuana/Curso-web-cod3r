let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Olá', 'como', 'vai', 'você']
let vetorDouble = [1.1, 6.7, 5.3, 8.6]

function concatenar(...args) {
    resultado = []
    for(let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))