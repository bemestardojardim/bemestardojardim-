<button class="btn-instagram">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Instagram">
  Síguenos en Instagram
</button>

/* Capturamos el evento 'scroll' */
window.addEventListener('scroll', () => {
    /* Obtenemos la posición actual del desplazamiento */
    const scrollTop = window.pageYOffset;

    /* Movemos la capa de fondo del contenido a una velocidad más lenta */
    document.querySelector('.content').style.transform = `translate3d(0, ${scrollTop * -0.3}px, 0)`;

    /* Movemos la capa de fondo de la imagen */
    document.querySelector('body:before').style.transform = `translate3d(0, ${scrollTop * 0.5}px, 0)`;
});
