let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1  // operador incremento e decremento pode ser escrito antes ou depois
console.log(num1)

console.log(++num1 === num2--) // de uma forma pré-fixada ele faz o incremento antes da comparação
console.log(num1 === num2)
