const array = [2.3 , 6.9, 9.6, 5.54]

for(let i in array){
    console.log(`Elemento ${array[i]}`)
}

//OU

const pessoa = {
    nome: 'Ana',
    idade: 23,
    sobrenome: 'Freitas'
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}