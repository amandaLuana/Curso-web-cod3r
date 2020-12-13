class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // tem outra classe como protótipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chama a superclasse avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // seta o valor para sobrenome
    }
}

const filho = new Filho
console.log(filho)