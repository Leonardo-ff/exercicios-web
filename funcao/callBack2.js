const notas = [2.0, 6.0, 9.0, 7.9, 8.2]

const notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
//com CallBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

//com CallBack e Arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)