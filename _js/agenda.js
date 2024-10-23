window.onload = function(){
    if (sessionStorage.getItem('user') == "User") {
        document.getElementById('botao-login').style.display = 'none'
        document.getElementById('botao-cadastro').style.display = 'none'
        document.getElementById('user-icone').style.display = 'block'

        document.getElementById('nome-user').innerHTML = sessionStorage.getItem('nome')
    }
}

function mostrarDados() {
    var divDados = document.getElementById('dados')

    document.getElementById('email-icone').innerHTML = "<b>E-mail: </b>" + sessionStorage.getItem('email')
    document.getElementById('cpf-icone').innerHTML = "<b>CPF: </b>" + sessionStorage.getItem('cpf')

    if (divDados.style.display == 'block') {
        divDados.style.display = 'none'
    }
    else {
        divDados.style.display = 'block'
    }
}

function sair() {
    sessionStorage.setItem('user', "notUser")
    document.getElementById('figure').style.display = 'none'
    document.getElementById('botao-login').style.display = 'block'
    document.getElementById('botao-cadastro').style.display = 'block'
}