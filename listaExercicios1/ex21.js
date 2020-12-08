function planoSaude(idade) {
    let valorFixo = 100
    if (idade < 10) {
        console.log(180)
    } else if (idade > 10 && idade < 30) {
        console.log(150)
    } else if (idade > 30 && idade < 60) {
        console.log(195)
    } else {
        console.log(230)
    }
}

planoSaude(9)
planoSaude(50)
planoSaude(75)
planoSaude(20)