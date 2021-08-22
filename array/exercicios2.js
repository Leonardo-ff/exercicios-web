let numero = 1
console.log('Exercicio ' + numero)//Exer 1

function cumprimentar(nome){
    return `"Olá, ${nome}!"`
}
console.log(cumprimentar('Leonardo'))

numero++
console.log('Exercicio ' + numero) //Exer 2

function anosDias(anos) {
    let dias = anos * 365
    return dias
}
console.log(anosDias(25))

numero++
console.log('Exercicio ' + numero)//Exer 3

function horasSalario(horas, salarioHora){
    return `Salário igual a R$ ${(salarioHora * horas).toFixed(2)}`
}

console.log(horasSalario(180, 12))

numero++
console.log('Exercicio ' + numero)//Exer 4

function numeroMes(numero){
    switch(numero){
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Numero errado')
    }
}
numeroMes(2)
numeroMes(12)
numeroMes(22)

numero++
console.log('Exercicio ' + numero)//Exer 5

function maiorOuIgual(n1, n2){
    if(n1 >= n2){
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(2,1))
console.log(maiorOuIgual(1,1))
console.log(maiorOuIgual(0,10))
console.log(maiorOuIgual(0,'10'))

numero++
console.log('Exercicio ' + numero)//Exer 6

function inverso(x){
    let tipo = typeof x

    if(tipo == "boolean" ){
        return !x
    } else if(tipo == "number"){
        return -x
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}
console.log(inverso(true))
console.log(inverso(1))
console.log(inverso(-1))

numero++
console.log('Exercicio ' + numero)//Exer 7

function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}
numero++
console.log('Exercicio ' + numero)//Exer 8

function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)
    function multiplicarRecursivamente(numero, multiplicador) {
    return (
    multiplicador === 1 ?
    numero :
    numero + multiplicarRecursivamente(numero, multiplicador-1)
    )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero )
    }
    

numero++
console.log('Exercicio ' + numero)//Exer 9

numero++
console.log('Exercicio ' + numero)//Exer 10

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }

numero++
console.log('Exercicio ' + numero)//Exer 11

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
    }

numero++
console.log('Exercicio ' + numero)//Exer 12

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}
    
numero++
console.log('Exercicio ' + numero)//Exer 13


numero++
console.log('Exercicio ' + numero)//Exer 13
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}

console.log(removerPropriedade({a: '1', b: 2, c:'22'}, "a"))

numero++
console.log('Exercicio ' + numero)//Exer 14

function objetoParaArray(objeto) {
    return Object.entries(objeto)
    }
console.log(objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        }))

numero++
console.log('Exercicio ' + numero)//Exer 15

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
}
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

numero++
console.log('Exercicio ' + numero)//Exer 16

function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}
console.log(checarAnoBissexto(2024))    

numero++
console.log('Exercicio ' + numero)//Exer 17
numero++
console.log('Exercicio ' + numero)//Exer 18
