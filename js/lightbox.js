const imagenes = document.querySelectorAll('.img-gallery');
const imageneslight = document.querySelector('.insert-image');
const contenedorlight = document.querySelector('.image-light');

const cerrar = document.querySelector('.close');

cerrar.addEventListener('click', ()=>{
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
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
}