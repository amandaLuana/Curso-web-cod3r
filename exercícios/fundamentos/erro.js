function tratarErroELancar(erro) {
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
    throw 'Ocorreu um erro no sistema, tente novamente mais tarde'
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // tratar o erro
        tratarErroELancar(e)
    } finally  {// executado sempre, mesmo que ocorra erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)