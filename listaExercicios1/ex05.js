function conversor(moeda) {
    console.log(moeda.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'} ))
}

conversor(0.30000000000000004)