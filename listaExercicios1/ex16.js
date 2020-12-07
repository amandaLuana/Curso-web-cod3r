function calculadora(numero1, operacao, numero2) {
    switch(operacao) {
        case '+':
            console.log(numero1 + numero2)
            break
        case '-':
            console.log(numero1 - numero2)
            break
        case '*':
            console.log(numero1 * numero2)
            break
        case '/':
            console.log(numero1 / numero2)
            break
        default: 
            console.log('Operação inválida')
    }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(10, '/', 2)