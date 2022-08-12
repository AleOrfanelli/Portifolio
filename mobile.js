function aparecermenu() {
    var menu = document.querySelector('.mobile-menu')

    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
        document.querySelector('.icon').src = "img/menu.png"
    } else {
        menu.classList.add('open')
        document.querySelector('.icon').src = "img/menu-aberto.png"
    }
}