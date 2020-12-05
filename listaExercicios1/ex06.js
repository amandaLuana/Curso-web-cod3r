function jurosSimples(capitalInicial, taxaJuros) {
    let resultado = (capitalInicial * taxaJuros) + capitalInicial
    console.log(resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}))  
}

jurosSimples(100, 0.10)

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicado) {
    let juros = Math.pow(1 + taxaJuros, tempoAplicado)
    let resultado = juros * capitalInicial
    console.log(resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}))
}

jurosCompostos(5000 ,0.01, 6)