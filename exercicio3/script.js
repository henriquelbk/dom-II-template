// atenção: segurando shift

const input = document.getElementsByTagName('input')[0]

const paragrafo = document.getElementsByTagName('p')[0]

const checaCaps = (event) => {
    
    if(event.shiftKey){
        paragrafo.innerHTML = 'Atenção: segurando SHIFT'
    } else {
        paragrafo.innerHTML = ''
    }
}