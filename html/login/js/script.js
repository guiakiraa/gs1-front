let menu = document.querySelector('.iconeMenuCelular');
let logar = document.querySelector('#logar')
let cadastro = document.querySelector('#cadastro') 

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

logar.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(logar);
    const dadosPessoaisEntrar = Object.fromEntries(formData);

    console.log(dadosPessoais);

    localStorage.setItem('lista', JSON.stringify(dadosPessoaisEntrar));
    let dados = JSON.parse(localStorage.getItem('lista'));
    console.log(dados);
})

cadastro.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(cadastro);
    const dadosPessoaisCadastro = Object.fromEntries(formData);

    console.log(dadosPessoaisCadastro);

    localStorage.setItem('lista', JSON.stringify(dadosPessoaisCadastro));
    let dados = JSON.parse(localStorage.getItem('lista'));
    console.log(dados);
})