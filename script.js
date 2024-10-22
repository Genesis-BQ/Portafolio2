let menuVisible = false;

//Función para ocultar o mostar el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciona una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
    }
}
//funcion el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//funsion para descargar el cv
document.getElementById('downloadCV').addEventListener('click', function() {
    // Ruta del archivo que deseas descargar
    const cvUrl = 'cv/Curriculum Vitae.pdf';

    // Crear un enlace temporal para iniciar la descarga
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Curriculum Vitae.pdf'); // Nombre del archivo que se descargará

    // Añadir el enlace temporal al DOM y hacer clic en él
    document.body.appendChild(link);
    link.click();

    // Remover el enlace temporal del DOM
    document.body.removeChild(link);
});
