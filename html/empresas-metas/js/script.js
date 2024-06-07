let menu = document.querySelector('.iconeMenuCelular');
let botao1 = document.querySelector('#botao1')
let botao2 = document.querySelector('#botao2')
let botao3 = document.querySelector('#botao3')

menu.addEventListener('click', ()=> {
    let menuCelular = document.querySelector('.menuCelular');
    if (menuCelular.classList.contains('aberto')) {
        menuCelular.classList.remove('aberto')
        document.querySelector('.icone').src = "../../img/abrirMenu.svg"
    } else {
        menuCelular.classList.add('aberto')
        document.querySelector('.icone').src = "../../img/fecharMenu.svg"
    }
})

botao1.addEventListener('click', ()=> {
    botao1.innerHTML = "Você está participando"
})

botao2.addEventListener('click', ()=> {
    botao2.innerHTML = "Você está participando"
})

botao3.addEventListener('click', ()=> {
    botao3.innerHTML = "Você está participando"
})