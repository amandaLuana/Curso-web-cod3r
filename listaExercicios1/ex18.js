function numeroExtenso(numero) {
    switch(numero) {
        case 0: 
            return 'zero'
        case 1: 
            return 'um'
        case 2:
            return 'dois'
        case 3: 
            return 'três'
        case 4: 
            return 'quatro'
        case 5: 
            return 'cinco'
        case 6: 
            return 'seis'
        case 7: 
            return 'sete'
        case 8: 
            return 'oito'
        case 9: 
            return 'nove'
        case 10: 
            return 'dez'
        default: 
            return 'Número fora do intervalo'
    }
}

console.log(numeroExtenso(0))
console.log(numeroExtenso(10))
console.log(numeroExtenso(7))
console.log(numeroExtenso(15))