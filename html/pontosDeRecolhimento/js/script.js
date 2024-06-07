let menu = document.querySelector('.iconeMenuCelular');
let ativaLocal = document.querySelector('.ativaLocal')
let textoAtivaLocal = document.querySelector('.textoAtivaLocal')

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

ativaLocal.addEventListener('click', ()=> {
    textoAtivaLocal.innerHTML = "Sua Localização foi ativada!"
})