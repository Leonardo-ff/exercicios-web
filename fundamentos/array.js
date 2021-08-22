const valores = [1.1 , 9.9, 55.6, 0.55]
console.log(valores)

valores[4] = 4.4
console.log(valores)
console.log(valores[5]) // indefinido

valores.push(70.0)
console.log(valores)
console.log(valores.length)

console.log(valores.pop())//imprime o ultimo valor

delete valores[0]//deletou o valor de indice 0
console.log(valores)

console.log(typeof valores)