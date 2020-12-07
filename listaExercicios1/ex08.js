let pontuacoes = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function jogos(pontuacoes) {
    let pontuacao = pontuacoes.split(", ")
    let quebraRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            quebraRecordes++
        } else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i + 1
        }
    }
    return [quebraRecordes, piorJogo]
}

console.log(jogos(pontuacoes))
