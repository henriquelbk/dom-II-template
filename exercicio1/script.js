const lista = document.getElementById('lista')

const itemZero = document.createElement('li')
itemZero.innerHTML = 'Item 0'

//Outro modo
const itemCinco = document.createElement('li')
const textoItemCinco = document.createTextNode('Item 5')
itemCinco.appendChild(textoItemCinco)

// Colocando na Lista
lista.insertAdjacentElement("afterbegin", itemZero)
lista.insertAdjacentElement("beforeend", itemCinco)