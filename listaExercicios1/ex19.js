function cardapio(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return quantidade * 3.00
        case 200:
            return quantidade * 4,00
        case 300: 
            return quantidade * 5.50
        case 400:
            return quantidade * 7.50
        case 500: 
            return quantidade * 3.50
        case 600:
            return quantidade * 2.80
        default:
            return 'produto inexistente'
    }
}

console.log(cardapio(100, 3))
console.log(cardapio(600, 3))
console.log(cardapio(700, 2))