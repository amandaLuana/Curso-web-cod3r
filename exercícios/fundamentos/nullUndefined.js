let valor // não inicializada
console.log(valor) // undefined
// console.log(valor2)  is not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) erro não pode ler a propriedade toString de null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco se precisar tirar um valor do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

