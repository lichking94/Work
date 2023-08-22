let ataqueJugador 
let ataqueEnemigo



function iniciarJuego(){
   
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click',seleccionarMascotaJugador )
   

    let botonFuego = document.getElementById('boton-fuego')
     botonFuego.addEventListener('click', ataqueFuego)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonAire = document.getElementById('boton-aire')
    botonAire.addEventListener('click', ataqueAire)

}

function seleccionarMascotaJugador(){

    let animal1 =  document.getElementById('caliope')
    let animal2 =  document.getElementById('rocoso')
    let animal3 =  document.getElementById('firedar')
    let animal4 =  document.getElementById('vulcano')
    let animal5 =  document.getElementById('pantano')
    let animal6 =  document.getElementById('rocmag')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let animal = 1
    
    if(animal1.checked)
        spanMascotaJugador.innerHTML = 'caliope'

    else if (animal2.checked)
    {   
        spanMascotaJugador.innerHTML = 'rocoso'
    }
    else if (animal3.checked)
    {   
        spanMascotaJugador.innerHTML = 'firedar'
    }
    else if (animal4.checked)
    {   
        spanMascotaJugador.innerHTML = 'vulcano'
    }

    else if (animal5.checked)
    {   
        spanMascotaJugador.innerHTML = 'pantano'
    }

    else if (animal6.checked)
    {   
        spanMascotaJugador.innerHTML = 'rocmag'
    }

    else
    {   
        alert ('No Seleccionaste a ninguna mascota')
         animal = 0
        
    } 

     
     if(animal == 1){
        seleccionarMascotaEnemigo()
     }
    
          
}
  

function  seleccionarMascotaEnemigo(){

    let mascotaEnemigo = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
   
    if (mascotaEnemigo == 1) 
    {
        spanMascotaEnemigo.innerHTML = 'caliope'
    }
    else if (mascotaEnemigo == 2)
    {
        spanMascotaEnemigo.innerHTML = 'rocoso'
    }
    else if (mascotaEnemigo == 3)
    {
        spanMascotaEnemigo.innerHTML = 'firedar'
    }
    else if (mascotaEnemigo == 4)
    {
        spanMascotaEnemigo.innerHTML = 'vulcano'
    }
    else if (mascotaEnemigo == 5)
    {
        spanMascotaEnemigo.innerHTML = 'pantano'
    }
    else(mascotaEnemigo == 6)
    {
        spanMascotaEnemigo.innerHTML = 'rocmag'
    }

 }

 function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
 }


 function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
 }

 function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
 }

 function ataqueAire(){
    ataqueJugador = 'AIRE'
    ataqueAleatorioEnemigo()
    
 }


 function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1,4)
        
        if(ataqueAleatorio == 1)
        {
            ataqueEnemigo = 'FUEGO'
        }
        else if (ataqueAleatorio == 2)
        {
            ataqueEnemigo = 'TIERRA'
        }
        else if (ataqueAleatorio == 3)
        {
            ataqueEnemigo = 'AGUA'
        }
        else (ataqueAleatorio == 4)
        {
            ataqueEnemigo = 'AIRE'
        }
 }
 

function aleatorio (min,max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)
