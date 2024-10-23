function checarLogin() {
    var cpf = document.getElementById('cpf').value
    var senha = document.getElementById('senha').value

    var cpfCadastro = sessionStorage.getItem('cpf')
    var senhaCadastro = sessionStorage.getItem('senha')

    if ((cpfCadastro == cpf) && (senhaCadastro == senha)) {
        sessionStorage.setItem('user', 'User')
        return true
    }
    else {
        document.getElementById('avisoLogin').style.display = 'block'
        return false
    }
   
}

function mostrarSenha() {
    var tipo = document.getElementById('senha')

    if (tipo.type === "password") {
        tipo.setAttribute('type', 'text')

        document.getElementById('icone-senha').classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
        tipo.setAttribute('type', 'password')

        document.getElementById('icone-senha').classList.replace('fa-eye-slash', 'fa-eye')
    }
}
