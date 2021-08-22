class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsumado = 0
        this.lancamentos.forEach(l => {
            valorConsumado += l.valor
        })
        return valorConsumado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario())