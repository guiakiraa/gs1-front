let menu = document.querySelector('.iconeMenuCelular');
let participar = document.querySelector('.participar')

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

participar.addEventListener('click', ()=> {
    participar.innerHTML = "Vôce está participando"
})