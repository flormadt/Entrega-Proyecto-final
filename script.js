let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList ='';
        menuVisible = false;
    }else{
        document.getElementById('nav').classList ='responsive';
        menuVisible = true;
    }
}

function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Office");
        habilidades[1].classList.add("CorelDraw");
        habilidades[2].classList.add("Photoshop");
        habilidades[3].classList.add("Ingles");
        habilidades[4].classList.add("Italiano");
        habilidades[5].classList.add("Liderazgo");
        habilidades[6].classList.add("Equipo");
        habilidades[7].classList.add("Comunicación");
        habilidades[8].classList.add("Cumplimiento");
        habilidades[9].classList.add("Prolijidad");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 

