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
