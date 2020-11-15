const nome = 'Amanda'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 
    ${nome}!`

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // transforma em letras maiúsculas
console.log(`Ei... ${up('cuidado')}`) // usou a função para transformar cuidado em letras maiúsculas

