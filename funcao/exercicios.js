console.log('Exercicio 1')
function exercicio1(a, b) {
    console.log(`Soma ${a + b}`)
    console.log(`Subtração ${a - b}`)
    console.log(`Divisao ${a / b}`)
    console.log(`Multiplicação ${a * b}`)
}
exercicio1(1, 2)

console.log()
console.log('Exercicio 2')
function exerc2(a,b,c){
    if(a == b && a == c && b == c){
        console.log('Equilatero')
    } else if(a == b && a != c){
        console.log('Isoceles')
    } else if(a != b && a == c){
        console.log('Isoceles')
    } else if(a != b && a != c && b == c){
        console.log('Isoceles')
    } else if(a == b && a != c){
        console.log('Isoceles')
    } else {
        console.log('Escaleno')
    }
}
exerc2(1,1,1)
exerc2(1,2,1)
exerc2(1,2,3)
exerc2(1,2,2)
exerc2(1,1,5)

console.log('\n Exercicio 3')

function exerc3(a, b){
    console.log(`A Base ${a} com Expoente ${b} é igual a ${Math.pow(a, b)}`)
}

exerc3(3, 2)
exerc3(2, 3)

console.log('\n Exercicio 4')

function exerc4(a, b){
    let div = a / b
    let resDiv = a % b
    console.log(`O Resultado é ${div} e seu resto é ${resDiv}`)
}

exerc4(3, 2)
exerc4(5, 3)
exerc4(4, 1.5)

console.log('\nExercicio 5')

function exerc5(a){
    console.log(`O numero ${a} em Reais é R$ ${Math.fround(a).toFixed(2).replace('.', ',')}`)
}

exerc5(0.55555566555)
exerc5(15.56895966)

console.log('\nExercicio 6')

function exerc6JurosSimples(cptInicial, txJuros, tmpAplic){
    let juros = cptInicial * (txJuros/100) * (tmpAplic/12)
    let montante = cptInicial + juros
    console.log(
        `Capital Inicia: R$ ${cptInicial}\nTaxa de Juros: ${txJuros}%\nTempo Aplicacao: ${tmpAplic} meses\nMontante: R$ ${montante.toFixed(2)}\n`)
    }
function exerc6JurosComposto(cptInicial, txJuros, tmpAplic){
    let montante = cptInicial * (Math.pow((1+(txJuros/100)), tmpAplic))
    console.log(
    `Capital Inicia: R$ ${cptInicial}\nTaxa de Juros: ${txJuros}%\nTempo Aplicacao: ${tmpAplic} meses\nMontante: R$ ${montante.toFixed(2)}\n`)
}

exerc6JurosSimples(1000, 10, 12)

exerc6JurosComposto(1000, 10, 12)

console.log('\nExercicio 7')


function exerc7(a, b, c){

}


console.log('\nExercicio 8')

function exerc8(pontos){
    let pontuacoes = pontos.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(exerc8('10,20,10,30,30, 20, 25'))
