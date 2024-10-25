function checarNome() {
    var comprimentoNome = document.getElementById('nome').value.length

    if (comprimentoNome < 4) {
    var comprimentoNome = document.getElementById('nome').value

    var nomeRegex = /^([a-zA-Z]?\s??[a-zA-Z]?){0,}$/

    if (!nomeRegex.test(comprimentoNome) || (comprimentoNome.length) < 3) {
            document.getElementById('nome').style.border = '2px solid #e63636'
            document.getElementById('avisoNome').style.display = 'block'
        }
        else {
            document.getElementById('nome').style.border = 'none'
            document.getElementById('avisoNome').style.display = 'none'
        }
    }
}

function checarCpf() {
    var comprimentoCpf = document.getElementById('cpf').value.length

    if (comprimentoCpf < 15) {
        var comprimentoCpf = document.getElementById('cpf').value

        var cpfRegex = /^\d{3}?\.?\d{3}?\.?\d{3}?\-?\d{2}$/

        if (!cpfRegex.test(comprimentoCpf)) {
            document.getElementById('cpf').style.border = '2px solid #e5322a'
            document.getElementById('avisoCpf').style.display = 'block'
        }
        else {
            document.getElementById('cpf').style.border = 'none'
            document.getElementById('avisoCpf').style.display = 'none'
        }
    }
}

function checarEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '2px solid #e63636'
        document.getElementById('avisoEmail').style.display = 'block'
    }
    else{
        document.getElementById('email').style.border = 'none'
        document.getElementById('avisoEmail').style.display = 'none'
    }
}

function confirmarEmail() {
    var email = document.getElementById('email').value
    var email2 = document.getElementById('email2').value

    if (email == email2) {
        document.getElementById('email2').style.border = 'none'
        document.getElementById('avisoEmail2').style.display = 'none' 
    }
    else {
        document.getElementById('email2').style.border = '2px solid #e5322a'
        document.getElementById('avisoEmail2').style.display = 'block'
    }
}

function checarSenha() {
    var senha = document.getElementById('senha').value
    var avisoSenha = document.getElementById('avisoSenha')

    if (senha.length < 8) {
        avisoSenha.textContent = "A senha deve conter pelo menos 8 caracteres."
        document.getElementById('senha').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[A-Z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra maiúscula."
        document.getElementById('senha').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[a-z]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 letra minúscula."
        document.getElementById('senha').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[0-9]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 número."
        document.getElementById('senha').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else if (!/[#@$!%*?&]/.test(senha)) {
        avisoSenha.textContent = "A senha deve conter pelo menos 1 caractere especial (@, $, !, %, *, ?, &)"
        document.getElementById('senha').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha').style.display = 'block'
    }
    else {
        document.getElementById('senha').style.border = 'none'
        document.getElementById('avisoSenha').style.display = 'none'
    }
}

function confirmarSenha() {
    var senha = document.getElementById('senha').value
    var senha2 = document.getElementById('senha2').value

    if (senha == senha2) {
        document.getElementById('senha2').style.border = 'none'
        document.getElementById('avisoSenha2').style.display = 'none' 
    }
    else {
        document.getElementById('senha2').style.border = '2px solid #e5322a'
        document.getElementById('avisoSenha2').style.display = 'block'
    }
}

function checarCadastro() {
    var avisoNome = document.getElementById('avisoNome')
    var avisoCpf = document.getElementById('avisoCpf')
    var avisoEmail = document.getElementById('avisoEmail')
    var confirmaEmail = document.getElementById('avisoEmail2')
    var avisoSenha = document.getElementById('avisoSenha')
    var confirmaSenha = document.getElementById('avisoSenha2')
    
    if ((avisoNome.style.display == 'block') || (avisoCpf.style.display == 'block') || (avisoEmail.style.display == 'block') || (confirmaEmail.style.display == 'block') || (avisoSenha .style.display == 'block') || (confirmaSenha.style.display == 'block')) {
        return false
    }

    sessionStorage.setItem('cpf', document.getElementById('cpf').value)
    sessionStorage.setItem('senha', document.getElementById('senha').value)
    sessionStorage.setItem('nome', document.getElementById('nome').value)
    sessionStorage.setItem('email', document.getElementById('email').value)
    sessionStorage.setItem('user', "User")

    return true
}

function mostrarSenha1() {
    var tipo = document.getElementById('senha')

    if (tipo.type === "password") {
        tipo.setAttribute('type', 'text')

        document.getElementById('icone-senha1').classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
        tipo.setAttribute('type', 'password')

        document.getElementById('icone-senha1').classList.replace('fa-eye-slash', 'fa-eye')
    }
}

function mostrarSenha2() {
    var tipo = document.getElementById('senha2')

    if (tipo.type === "password") {
        tipo.setAttribute('type', 'text')

        document.getElementById('icone-senha2').classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
        tipo.setAttribute('type', 'password')

        document.getElementById('icone-senha2').classList.replace('fa-eye-slash', 'fa-eye')
    }
}

function margin() {
    if (document.getElementById('avisoSenha').style.display == 'block') {
        document.getElementById('icone-senha1').style.marginTop = "12px"
    }
    else {
        document.getElementById('icone-senha1').style.marginTop = "25px"
    }
    if (document.getElementById('avisoSenha2').style.display == 'block') {
        document.getElementById('icone-senha2').style.marginTop = "12px"
    }
    else {
        document.getElementById('icone-senha2').style.marginTop = "25px"
    }
}