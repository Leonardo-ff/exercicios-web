function fun1 (){}

const fun2 = function(){}


//da para armazenar dentro de um Array
const array = [function soma(a, b){ return a+b;}, fun1, fun2]
console.log(array[0](1,3))


const obj = { }
obj.falar = function () {return 'Opa'}

console.log(obj.falar())
