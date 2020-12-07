// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
// critério de divisibilidade = soma de todos os números e verificar se o resutado é divisil por 3

function numero(divisivel) {
    if (divisivel % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(numero(4))
console.log(numero(3))
console.log(numero(12))
console.log(numero(10))