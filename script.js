function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            gênero = 'Homem'
            if (idade >0 && idade <10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
                document.body.style.background = `#3c7dac`
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
                document.body.style.background = `#8eb8e2`
            } else if (idade <50) {
                // Adulto
               img.setAttribute('src', 'foto-adulto-m.jpg')
               document.body.style.background = `#362a31`
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
                document.body.style.background = `#303030`
            }   
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >0 && idade <10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
                document.body.style.background= `#ebc3cd`
            } else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
                document.body.style.background = `#3c7dac`
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
                document.body.style.background = `#feb10a`
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
                document.body.style.background = `#98a496`
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}