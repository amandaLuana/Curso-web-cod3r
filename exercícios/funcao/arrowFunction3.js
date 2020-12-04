let compararComThis = function (param) {
    console.log(this === param)
}

compararComThis(global) // true

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global) // false
compararComThis(obj) // true

let compararComThisArrow = param => console.log(this === param)
compararComThisArrow(global) // false
compararComThisArrow(module.exports) // true

compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj) // false
compararComThisArrow(module.exports) // true