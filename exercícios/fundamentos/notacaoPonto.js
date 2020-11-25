console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' sobrescreve o valor, com mais flexibilidade, não recomendado
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome 
}

const obj2 = new Obj('Cadeira')