let ataqueJugador;
let ataqueEnemigo;
let resultado;
let vidasJugador = 6
let vidasEnemigo = 6
let victoria = 0
let derrota = 0

    
function iniciarJuego() {
    let reiniciarjuego = document.getElementById('reiniciar')
    reiniciarjuego.style.display = 'none' 
    
  let sectionSeleccionarAtaque =  document.getElementById('ataque')
  sectionSeleccionarAtaque.style.display = 'none'


  let botonMascota = document.getElementById("boton-mascota");
  botonMascota.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonAire = document.getElementById("boton-aire");
  botonAire.addEventListener("click", ataqueAire);

  let botonReiniciar = document.getElementById('reiniciar')
  botonReiniciar.addEventListener('click',recargarJuego)
}

function seleccionarMascotaJugador() { 

    let setcionSeleccionarMascota = document.getElementById('mascota')
    setcionSeleccionarMascota.style.display = 'none'     

    let sectionSeleccionarAtaque =  document.getElementById('ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let animal1 = document.getElementById("caliope");
    let animal2 = document.getElementById("rocoso");
    let animal3 = document.getElementById("firedar");
    let animal4 = document.getElementById("vulcano");
    let animal5 = document.getElementById("pantano");
    let animal6 = document.getElementById("rocmag");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let animal = 1;



  if (animal1.checked) {
    spanMascotaJugador.innerHTML = "caliope";
  } else if (animal2.checked) {
    spanMascotaJugador.innerHTML = "rocoso";
  } else if (animal3.checked) {
    spanMascotaJugador.innerHTML = "firedar";
  } else if (animal4.checked) {
    spanMascotaJugador.innerHTML = "vulcano";
  } else if (animal5.checked) {
    spanMascotaJugador.innerHTML = "pantano";
  } else if (animal6.checked) {
    spanMascotaJugador.innerHTML = "rocmag";
  } else {
    alert("No Seleccionaste a ninguna mascota");
    animal = 0;
  }

  if (animal == 1) {
    seleccionarMascotaEnemigo();
  }
}

function seleccionarMascotaEnemigo() {
  let mascotaAletoria = aleatorio(1, 6);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAletoria == 1) {
    spanMascotaEnemigo.innerHTML = "caliope";
  } else if (mascotaAletoria == 2) {
    spanMascotaEnemigo.innerHTML = "rocoso";
  } else if (mascotaAletoria == 3) {
    spanMascotaEnemigo.innerHTML = "firedar";
  } else if (mascotaAletoria == 4) {
    spanMascotaEnemigo.innerHTML = "vulcano";
  } else if (mascotaAletoria == 5) {
    spanMascotaEnemigo.innerHTML = "pantano";
  } else {
    spanMascotaEnemigo.innerHTML = "rocmag";
  }



}



function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueAire() {
  ataqueJugador = "AIRE";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 4);

  if (ataqueAleatorio == 1) {
    console.log("fuego");
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    console.log("tierra");
    ataqueEnemigo = "TIERRA";
  } else if (ataqueAleatorio == 3) {
    console.log("agua");
    ataqueEnemigo = "AGUA";
  } else {
    console.log("aire");
    ataqueEnemigo = "AIRE";
  }

    batalla()
}


function batalla(){
    

    let spanVidasJugador = document.getElementById("vida-jugador")
    let spanVidasEnemigo = document.getElementById("vida-enemigo")
     
    if (ataqueJugador == ataqueEnemigo) {
        mensajesglobal("EMPATE")
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA")
  {
        mensajesglobal("GANASTE")
        vidasEnemigo--
        console.log(vidasEnemigo)
        spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        mensajesglobal("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        mensajesglobal("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
  }  else if (ataqueJugador == "AIRE" && ataqueEnemigo == "FUEGO") {
         mensajesglobal("GANASTE")
         vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AIRE") {
        mensajesglobal("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
  }
    else {
        mensajesglobal("PERDISTE")
        vidasJugador--
        console.log(vidasJugador)
        spanVidasJugador.innerHTML = vidasJugador 
        derrota++
        console.log(derrota)
          
  } 
     // REVISAR LAS VIDAS 
     revisarvidas()
}

function revisarvidas(){
    if(vidasEnemigo == 0 )
    {
       mensajeFinal("FELICIDADES GANASTE ")
    }
    else if(vidasJugador == 0)
    {
        //vidasJugador - derrota
        mensajeFinal("LO SIENTO PERDISTE ")
    }

} 


function mensajesglobal(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let mensaje = document.createElement('p')
    mensaje.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +  ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado 

    sectionMensajes.appendChild(mensaje)
    
}

function mensajeFinal(resultadoFinal){
    let reiniciarjuego = document.getElementById('reiniciar')
    reiniciarjuego.style.display = 'block'

    let sectionMensajes = document.getElementById('mensajes')

    let mensaje = document.createElement('p')
    mensaje.innerHTML = resultadoFinal

    sectionMensajes.appendChild(mensaje)
    
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true

    let botonAire = document.getElementById("boton-aire");
    botonAire.disabled = true
}

function recargarJuego(){
    location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
