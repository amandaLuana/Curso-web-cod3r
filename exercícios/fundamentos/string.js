const escola = "Cod3r"

console.log(escola.charAt(4)) // imprime o caractere do índice
console.log(escola.charAt(5)) // vazio
console.log(escola.charCodeAt(3)) // pega o valor na tabela ASCII
console.log(escola.indexOf('3')) // pega o indice do caractere

console.log(escola.substring(1)) // imprime a partir do índice
console.log(escola.substring(0, 3)) //primeiro índice e segundo índice

console.log('Escola '.concat(escola).concat("!")) // concatena
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // da replace no índice selecionado

console.log('Ana, Maria, Pedro'.split(',')) // gera um array
