const soma = function(a,b){
    return a + b
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,3)
imprimirResultado(2,3, soma)
imprimirResultado(2,3, function(x,y){
    return x-y
})


