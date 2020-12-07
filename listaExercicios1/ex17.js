function salario(plano, salarioAtual) {
    switch(plano) {
        case 'A':
            console.log(salarioAtual * 1.1)
            break
        case 'B': 
            console.log(salarioAtual * 1.15)
            break
        case 'C': 
            console.log(salarioAtual * 1.2)
            break
        default: 
            console.log('Plano inválido')
    }
}

salario('A', 1200)
salario('B', 1200)
salario('C', 1200)
salario('D', 1200)