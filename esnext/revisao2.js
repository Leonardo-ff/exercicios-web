//Arrow function
const soma = (a, b) => a + b //return implicito
console.log(soma(1, 2))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Leonardo')
log(undefined)
log(null)

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))