const alunos = [
    {nome: 'Leo', nota: 8.7, bolsista: false},
    {nome: 'Ana', nota: 7.3, bolsista: true},
    {nome: 'Bia', nota: 9.2, bolsista: false},
    {nome: 'Gui', nota: 9.8, bolsista: true},
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: algum bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))