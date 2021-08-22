const obj1 = {}

console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcao construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Geladeira', 2000.00, 0.10)
const p2 = new Produto('TV', 1000.00, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 2000, 1)
const f2 = criarFuncionario('Maria', 3000, 5)

console.log(f1.getSalario(), f2.getSalario())
