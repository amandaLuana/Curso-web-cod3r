function triangulo(x, y, z) {
    if (x == y && x == z && y == z) {
        console.log('O triângulo é Equilátero')
    } else if (x == y || x == z || y == z) {
        console.log('O triângulo é Isósceles')
    } else {
        console.log('O triângulo é Escaleno')
    }
}

triangulo(10, 10, 10)
triangulo(10, 10, 2)
triangulo(2, 3, 4)