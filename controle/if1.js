function seForVerdade (valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}
//ele irá imprimir tudo aquilo que será true
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade(0)
seForVerdade('')
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade('Leo')
seForVerdade(1)