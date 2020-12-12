const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // define que o protótipo é o objeto que foi passado como parâmetro
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,  {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não pode reescrever conforme foi colocado acima
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
