// não recebe os parâmetros mas usa o arguments para pegar os parâmetros que são passados na chamada da função e então fazer a soma
function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('hello ', 'world')) // o 0 vem antes pois foi passado na declaração da variável
