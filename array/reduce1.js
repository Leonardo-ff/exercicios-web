const alunos = [
    {nome: 'Leo', nota: 8.7, bolsista: false},
    {nome: 'Ana', nota: 7.3, bolsista: true},
    {nome: 'Bia', nota: 9.2, bolsista: false},
    {nome: 'Gui', nota: 9.8, bolsista: true},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)