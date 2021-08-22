const avo = { atrib1: 'A'}
const pai = {__proto__: avo , atrib2: 'B'}
const filho = {__proto__: pai, atrib3: 'C'}

console.log(filho.atrib1)

const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` 
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())