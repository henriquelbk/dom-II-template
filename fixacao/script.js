const input = document.getElementById('meu-input')
const lista = document.getElementById('lista')


const insereItem = (event) =>{
    const addFruta = document.createElement('li')
    
    addFruta.innerHTML = input.value
    
    lista.insertAdjacentElement('beforeend', addFruta)
    
    input.value = ''
}