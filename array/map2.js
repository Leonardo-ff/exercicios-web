Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 1.45}',
    '{"nome": "Caneta", "preco": 4.50}',
    '{"nome": "Caderno", "preco": 10.75}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)