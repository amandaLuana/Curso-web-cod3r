function diaUtil(dia) {
    switch (dia) {
        case 1: 
            console.log('domingo, fim de semana')
            break
        case 2:
            console.log('segunda, dia útil')
            break
        case 3: 
            console.log('terça, dia útil')
            break
        case 4:
            console.log('quarta, dia útil')
            break
        case 5: 
            console.log('quinta, dia útil')
            break
        case 6:
            console.log('sexta, dia útil')
            break
        case 7: 
            console.log('sábado, fim de semana')
            break
        default: 
            console.log('valor inválido')        
    }
}

diaUtil(2)