let menu = document.querySelector('.iconeMenuCelular');
let resgatar = document.querySelector('.resgatar')

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

resgatar.addEventListener('click', ()=> {
    resgatar.innerHTML = "Resgatado"
})
