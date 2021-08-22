//Object.preventeExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Sei la'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Leo'
produto.descricao = 'texto qualquer'
delete produto.tag
//consigo excluir atributos mas não acrescentar
console.log(produto)

//Object.seal
const pessoa = {nome: 'Leo', idade: 25}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Silva'
pessoa.altura = 1.80
delete pessoa.idade
//consigo alterar, mas nao excluir e incluir
console.log(pessoa)

//Object.freeze
