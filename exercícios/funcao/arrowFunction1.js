// função normal
let dobro = function (a) {
    return 2 * a
}

// arrow function
dobro = (a) => {
    return 2 * a
}

// retorno implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

// função normal
let ola = function () {
    return 'Olá'
}

// arrow function
ola = () => 'Olá'
ola = _ => 'Olá'// possui um parâmetro que pode ser ignorado ao chamar a função
console.log(ola())

teste = (a) => 2 + a
console.log(teste(2))