const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 3499, fragil: true},
    {nome: 'Copo de Vidro', preco: 24, fragil: true},
    {nome: 'Copo de Plastico', preco: 14.99, fragil: false},
]


const fragil = p => p.fragil
const caro = p => p.preco > 2000

console.log(produtos.filter(caro).filter(fragil))