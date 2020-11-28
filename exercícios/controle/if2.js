function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // não usar ; em if
        console.log(num)  // sempre executado, porque não tem filtro
    }
}

teste2(6)
teste2(8)
