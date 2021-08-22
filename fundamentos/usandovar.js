var numero = 1 
{
    var numero = 2
    console.log('dentro ' + numero)
    
}
console.log('fora ' + numero)

//o var sobre escreve a var de fora, mesmo dentro de outro escopo, esse é o risco de se trabalhar com Var, ainda mais no 
/*front-end
*
*/

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}

console.log(index)

let x = 0