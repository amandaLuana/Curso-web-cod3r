// Object.preventExtension - prevenir, não vai permitir que o objeto seja estendido, não pode adicionar mais atributos no objeto

const produto = Object.preventExtensions( {
    nome: "Qualquer", preco: 1.99, tag: "promocao"
})

console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = "Borracha" // permitido alterar o atributo
produto.descricao = 'Borracha escolar branca'
delete produto.tag // pode excluir
console.log(produto)


// Object.seal - Não pode adicionar e nem deletar atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não adiciona atributos
delete pessoa.nome // não permitido excluir
pessoa.idade = 29 // pode modificar o atributo
console.log(pessoa)

// Object.freeze = selado + valores constantes
