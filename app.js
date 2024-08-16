let numeroSecreto = 0;
let intentos=0;
let listaNumeroSorteado = [];
let numeroMaximo =10;
let intentosMaximos =3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(numeroSecreto);
    if(numeroDeUsuario ===  numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}  `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreo es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        if (intentos > intentosMaximos) {
            asignarTextoElemento('p', `Has agotado tus ${intentosMaximos} intentos. El número secreto era ${numeroSecreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            limpiarCaja();
        }
        
       
    }
    return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado=  Math.floor(Math.random()*numeroMaximo)+1;   
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    // Si ya sorteamos tos los numeros
    if(listaNumeroSorteado.length==numeroMaximo){
       asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{
         // si el numero generado esta incluido en la lista
    if(listaNumeroSorteado.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
   
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un númeror del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
     condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}
condicionesIniciales();



