const imagenes = document.querySelectorAll('.img-gallery');
const imageneslight = document.querySelector('.insert-image');
const contenedorlight = document.querySelector('.image-light');
const menuopen1 = document.querySelector('.icon-menu');

const cerrar = document.querySelector('.close');

cerrar.addEventListener('click', ()=>{
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    menuopen1.style.opacity = '1'
})

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
    })
})

const aparecerimagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    menuopen1.style.opacity = '0'
}