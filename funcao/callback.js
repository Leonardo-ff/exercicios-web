const marcas = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

marcas.forEach(imprimir)