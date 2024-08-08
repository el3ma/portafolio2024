const navItems = document.getElementById('navItems')
const menuIcon = document.getElementById('menu-icon')
const closeIcon =document.getElementById('close-icon')
const btnMenu = document.getElementById('btn-menu')


function menu(){
    btnMenu.addEventListener('click', function(e){
        navItems.classList.toggle('active');
        menuIcon.classList.toggle('change');
        closeIcon.classList.toggle('change')
        console.log('hola')
    })
}

menu()