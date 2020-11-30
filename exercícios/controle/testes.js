// Math
let min = 1
let max = 10
console.log(Math.floor(Math.random() * (max - min) + min))

// Template strings
let text = 'Hello'
console.log(`${text} world!`)

// Array
let num = [10, 5, 6, 43]
num.push(20)
num.pop()
console.log(num)

// Object
let pessoa = {
    nome: 'Amanda',
    idade: 24,
    peso: 62
}

console.log(pessoa.nome) // dot notation

// Function
function teste(num1, num2) {
    return num1 + num2
}

console.log(teste(2, 4))

// Loop
for (let i = 0; i < 2; i++) {
    console.log('oi')
}

// Ternário
let nota = 8
const result = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(result)


