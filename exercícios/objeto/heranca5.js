console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')  //quebrar uma string, gera um array com todas as letras da string, inclusive espaços em branco
}

console.log('Escola Cod3r'.reverse())


Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())


String.prototype.toString = function () {
    return 'lascou tudo'
}

console.log('Escola Cod3r'.reverse())