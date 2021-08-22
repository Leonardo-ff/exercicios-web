const pilotos = ['Leo', 'Massa', 'Alonso', 'Rubinho']

pilotos.pop()
console.log(pilotos)

pilotos.push('Nikel')
console.log(pilotos)

pilotos.shift()//Tira o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//Coloca no primero
console.log(pilotos)

pilotos.splice(2, 0, 'Nikel')//splice adiciona e remove (indice inicio, quantos eliminar, elementos substitutos)
console.log(pilotos)

pilotos.splice(1, 1)//Saiu Massa
console.log(pilotos)

const pilotos2 = pilotos.slice(0, 1)
console.log(pilotos2)

const pilotos3 = pilotos.slice(1, 4)
console.log(pilotos3)