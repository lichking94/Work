

// Primer conjunto de variables
const reiniciarjuego = document.getElementById('reiniciar')
const sectionSeleccionarAtaque =  document.getElementById('ataque')
const botonMascota = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById('reiniciar')

// Segundo conjunto de variablesconst
const setcionSeleccionarMascota = document.getElementById('mascota')
//let sectionSeleccionarAtaque =  document.getElementById('ataque')

const spanMascotaJugador = document.getElementById("mascota-jugador");

//Tercer conjunto de variables
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");


// Cuarto conjunto de variables
const spanVidasJugador = document.getElementById("vida-jugador")
const spanVidasEnemigo = document.getElementById("vida-enemigo")

//Quinto conjunto de variables
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedortarjetas')
const poderesDragones = document.getElementById('poderesDragones')


//Sexto conjunto de variables
/*let sectionMensajes = document.getElementById('resultado')
let botonFuego = document.getElementById("boton-fuego");
let botonTierra = document.getElementById("boton-tierra");
let botonAgua = document.getElementById("boton-agua");
let botonAire = document.getElementById("boton-aire");
let reiniciarjuego = document.getElementById('reiniciar')*/

let dragones = []
let ataqueJugador = []
let ataqueEnemigo = []
let resultado;
let vidasJugador = 6
let vidasEnemigo = 6
let dragonJugador
let victoria = 0
let derrota = 0
let opcionDragones
let opcionAtaques
let animal1
let animal2 
let animal3 
let animal4 
let animal5 
let animal6 
let botonFuego
let botonTierra 
let botonAgua 
let botonAire 
let botones = {}
let ataquesDragonEnemigo = []


// creacion de clases 

class Dragones{
    constructor(nombre, foto, vida){
      this.nombre  = nombre
      this.foto = foto
      this.vida = vida
      this.ataques = []
    }


}

let caliope = new Dragones('Caliope', '/mokepon/assets/caliope.jpg', '6')
let rocoso = new Dragones('Rocoso', '/mokepon/assets/rocoso.jpg', '6')
let firedar = new Dragones('Firedar', '/mokepon/assets/firedar.jpg','6')
let vulcano = new Dragones('Vulcano', '/mokepon/assets/vulcano.jpg','6')
let pantano = new Dragones('Pantano', '/mokepon/assets/pantano.jpg','6')
let rocmag = new Dragones('Rocmag', '/mokepon/assets/rocmag.jpg','6')


caliope.ataques.push(
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🪨', id: 'boton-tierra'},
)

rocoso.ataques.push(
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🪨', id: 'boton-tierra'},
)

firedar.ataques.push(
  {nombre: '🪨', id: 'boton-tierra'},
  {nombre: '🪨', id: 'boton-tierra'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
)

vulcano.ataques.push(
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🪨', id: 'boton-tierra'},
)
pantano.ataques.push(
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🔥', id: 'boton-fuego'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🪨', id: 'boton-tierra'},
)
rocmag.ataques.push(
  {nombre: '🪨', id: 'boton-tierra'},
  {nombre: '🪨', id: 'boton-tierra'},
  {nombre: '🌬️', id: 'boton-aire'},
  {nombre: '💧', id: 'boton-agua'},
  {nombre: '🔥', id: 'boton-fuego'},
)

// array global
dragones.push(caliope,rocoso,firedar,vulcano,pantano,rocmag)


//nos debemos llevar varialbes que se repitan 


function iniciarJuego() {
    //let reiniciarjuego = document.getElementById('reiniciar') se repite
  reiniciarjuego.style.display = 'none' 
    
  dragones.forEach((dragon) =>{
      opcionDragones = `

      <input type="radio" id="${dragon.nombre}" name="mascota" />
      <label class="tarjeta-mascota"  for=${dragon.nombre}>
        <p>${dragon.nombre}</p>
        <img src=${dragon.foto} alt=${dragon.nombre}>
      </label>
      `
      contenedorTarjetas.innerHTML += opcionDragones
      
         animal1 = document.getElementById("Caliope");
         animal2 = document.getElementById("Rocoso");
         animal3 = document.getElementById("Firedar");
         animal4 = document.getElementById("Vulcano");
         animal5 = document.getElementById("Pantano");
         animal6 = document.getElementById("Rocmag"); 


  })

  //let sectionSeleccionarAtaque =  document.getElementById('ataque') se repite
  sectionSeleccionarAtaque.style.display = 'none'

  //let botonMascota = document.getElementById("boton-mascota"); se repite
  botonMascota.addEventListener("click", seleccionarMascotaJugador);

  //let botonFuego = document.getElementById("boton-fuego"); se repite 
 

  

  //let botonAgua = document.getElementById("boton-agua");
 

 //let botonAire = document.getElementById("boton-aire");
  

 // let botonReiniciar = document.getElementById('reiniciar')
  botonReiniciar.addEventListener('click',recargarJuego)
}

function seleccionarMascotaJugador() { 

   // let setcionSeleccionarMascota = document.getElementById('mascota')
    setcionSeleccionarMascota.style.display = 'none'     

     // let sectionSeleccionarAtaque =  document.getElementById('ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    //let animal1 = document.getElementById("caliope");
    //let animal2 = document.getElementById("rocoso");
    //let animal3 = document.getElementById("firedar");
    //let animal4 = document.getElementById("vulcano");
    //let animal5 = document.getElementById("pantano");
    //let animal6 = document.getElementById("rocmag");
    //let spanMascotaJugador = document.getElementById("mascota-jugador");
    let animal = 1;
    let imagen = document.createElement("img");

  if (animal1.checked) {
    spanMascotaJugador.innerHTML = animal1.id;
    dragonJugador = animal1.id
    imagen.src = "/mokepon/assets/caliope.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else if (animal2.checked) {
    spanMascotaJugador.innerHTML = animal2.id;
    dragonJugador = animal2.id
    imagen.width = 300;
    imagen.height = 300;
    imagen.src = "/mokepon/assets/rocoso.jpg";
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else if (animal3.checked) {
    spanMascotaJugador.innerHTML = animal3.id;
    dragonJugador = animal3.id
    imagen.src = "/mokepon/assets/firedar.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else if (animal4.checked) {
    spanMascotaJugador.innerHTML = animal4.id;
    dragonJugador = animal4.id
    imagen.src = "/mokepon/assets/vulcano.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else if (animal5.checked) {
    spanMascotaJugador.innerHTML = animal5.id;
    dragonJugador = animal5.id
    imagen.src = "/mokepon/assets/pantano.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else if (animal6.checked) {
    spanMascotaJugador.innerHTML = animal6.id;
    dragonJugador = animal6.id
    
    imagen.src = "/mokepon/assets/rocmag.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-jugador").appendChild(imagen);
  } else {
    alert("No Seleccionaste a ninguna mascota");
    animal = 0;
    location.reload()
  }

  if (animal == 1) {
    obtenerataques(dragonJugador);
    seleccionarMascotaEnemigo();
  }


}

function obtenerataques(dragonJugador){
  let ataques 
  for (let i = 0; i < dragones.length; i++) {
    if (dragonJugador === dragones[i].nombre) {
      ataques = dragones[i].ataques
      
    }
    
  }
  mostrarPoderes(ataques)
}

function mostrarPoderes(ataques){
  ataques.forEach((ataque) => {
    opcionAtaques =`
      <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `
    poderesDragones.innerHTML += opcionAtaques
    
  })

  botonFuego = document.getElementById('boton-fuego')
  botonAgua = document.getElementById('boton-agua')
  botonTierra = document.getElementById('boton-tierra')
  botonAire = document.getElementById('boton-aire')
  botones = document.querySelectorAll('.BAtaque')
  

}

function secuenciaAtque(){
  botones.forEach((boton) => {
    boton.addEventListener('click',(e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push('FUEGO')
        console.log(ataqueJugador)
        boton.style.background = '#CD4439'
      }else if (e.target.textContent === '💧') {
        ataqueJugador.push('AGUA')
        console.log(ataqueJugador)
        boton.style.background = '#CD4439'
      }else if(e.target.textContent === '🌬️'){
        ataqueJugador.push('VIENTO')
        console.log(ataqueJugador)
        boton.style.background = '#CD4439'
      }else{
        ataqueJugador.push('TIERRA')
        console.log(ataqueJugador)
        boton.style.background = '#CD4439'
      }
      
    })
  })
  ataqueAleatorioEnemigo()
}


function seleccionarMascotaEnemigo() {
  let mascotaAletoria = aleatorio(0, dragones.length -1);
  spanMascotaEnemigo.innerHTML = dragones[mascotaAletoria].nombre
  ataquesDragonEnemigo =  dragones[mascotaAletoria].ataque
  console.log(ataquesDragonEnemigo)

  let imagen = document.createElement("img");
if (mascotaAletoria == 0) {
  document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
    imagen.src = "/mokepon/assets/caliope.jpg";
    imagen.width = 300;
    imagen.height = 300;
   
  } 
  else if (mascotaAletoria == 1) {
    spanMascotaEnemigo.innerHTML = "rocoso";
    imagen.src = " /mokepon/assets/rocoso.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
  } else if (mascotaAletoria == 2) {
    spanMascotaEnemigo.innerHTML = "firedar";
    imagen.src = "/mokepon/assets/firedar.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
  } else if (mascotaAletoria == 3) {
    spanMascotaEnemigo.innerHTML = "vulcano";
    imagen.src = "/mokepon/assets/vulcano.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
  } else if (mascotaAletoria == 4) {
    spanMascotaEnemigo.innerHTML = "pantano";
    imagen.src = "/mokepon/assets/pantano.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
  } else {
    spanMascotaEnemigo.innerHTML = "rocmag";
    imagen.src = "/mokepon/assets/rocmag.jpg";
    imagen.width = 300;
    imagen.height = 300;
    document.getElementById("imagen-mascota-enemigo").appendChild(imagen);
  }

   secuenciaAtque()
}


function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, Dragones.length -1);
  console.log(ataqueAleatorio)

  if (ataqueAleatorio == 0  || ataqueAleatorio == 1 ) {
    ataqueEnemigo.push('FUEGO');
    console.log(ataqueEnemigo)
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
    ataqueEnemigo.push("TIERRA");
    console.log(ataqueEnemigo)
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    
    ataqueEnemigo.push("AGUA");
    console.log(ataqueEnemigo)
  } else {
    
    ataqueEnemigo.push("AIRE");
    console.log(ataqueEnemigo)
  }

    batalla()

let ataqueEnemigo = []
     

  }


function batalla(){
    

   // let spanVidasJugador = document.getElementById("vida-jugador")
  //  let spanVidasEnemigo = document.getElementById("vida-enemigo")
    
    if (ataqueJugador == ataqueEnemigo) {
        mensajesglobal("EMPATE")
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA")
  {
        mensajesglobal("GANASTE")
        vidasEnemigo--
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
        spanVidasJugador.innerHTML = vidasJugador 
        derrota++
          
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
 
    //let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //let mensaje = document.createElement('p')
    //mensaje.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +  ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado 

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}

function mensajeFinal(resultadoFinal){
    //let sectionMensajes = document.getElementById('resultado')
    //let mensaje = document.createElement('p') Esta no se usa tiene un nombre que viejo no disposible
    sectionMensajes.innerHTML = resultadoFinal
    //sectionMensajes.appendChild(mensaje)

    //let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true

    //let botonTierra = document.getElementById("boton-tierra");//
    botonTierra.disabled = true

    //let botonAgua = document.getElementById("boton-agua");////
    botonAgua.disabled = true

    //let botonAire = document.getElementById("boton-aire");//////
    botonAire.disabled = true

   //let reiniciarjuego = document.getElementById('reinicia//////r')//
    reiniciarjuego.style.display = 'block'

}

function recargarJuego(){
    location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);


