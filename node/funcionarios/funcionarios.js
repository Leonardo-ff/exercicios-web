const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const feminino = f => f.genero == 'F'
const china = f => f.pais == 'China'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(china)
        .filter(feminino)
        .reduce(menorSalario)

    console.log(func)
})
//Desafio mulher chinesa com menor salario