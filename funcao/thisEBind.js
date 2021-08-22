const pessoa = {
    saudacao: 'Ola',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar()

const falarDaPessoa = pessoa.falar.bind(pessoa)
falarDaPessoa()

console.log(falarDaPessoa)