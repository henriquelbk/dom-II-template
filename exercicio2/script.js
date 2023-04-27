//INPUT
//esconder a senha
//onclick do botão esconder senha

const inputSenha = document.getElementById('password')

const escondeSenha = (event) => {
    event.preventDefault()
    inputSenha.setAttribute('type', 'password')
}


//FORM
//retirar classe light
//incluir classe dark

const formulario = document.getElementsByTagName('form')[0]

formulario.classList.remove('light')
formulario.classList.add('dark')