const menuopen = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu-nav');

menuopen.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != menuopen){
            menu.classList.toggle('spread');
    }
})