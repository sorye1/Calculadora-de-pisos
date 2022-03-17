var m2 = prompt('Quantos m2 são?        OBS: ULTILIZE "." E NÃO ","')
var caixa = prompt('Quantos m2 tem em cada caixa?        OBS: ULTILIZE "." E NÃO ","')
var pedra = prompt('Quantas pedras tem na caixa?')

    var calculoCaixa = m2 / caixa 
    var prefinal = calculoCaixa - Math. trunc(calculoCaixa)
    var final = (prefinal * pedra)



    alert('Caixas = ' + Math.trunc(calculoCaixa) + '      Pedras = ' + Math.round(final))
    
