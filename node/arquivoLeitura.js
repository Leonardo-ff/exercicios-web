const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')//ler arquivo de forma sincrona
console.log(conteudo)


//assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//para arquivos JSON, pode se ler direto
const config = require('./arquivo.json')
console.log(config.db)//por causa da callback do modo assincrono, essa saida sai primeiro

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})//leitura de diretorio

//__dirname é uma constante no node que representa o diretorio atual e esta presente em todos os modulos do node.
//sempre disponivel