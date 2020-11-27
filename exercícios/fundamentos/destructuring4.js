function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] //invertendo o min para max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // reconhece como o valor minimo e pega o max determinado anteriormente
console.log(rand([, 10]))
// console.log(rand())  erro