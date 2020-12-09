let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function vetores(vetorPilha, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        console.log(vetorAdiciona[i])
        vetorPilha.push(vetorAdiciona[i])
    }
    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' + vetorPilha)
}

vetores(vetorPilha, vetorAdiciona)