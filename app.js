let amigos = []; // array de amigos
let ulAmigosHTML = document.getElementById('listaAmigos')

function agregarAmigo (){
    let amigoHTML = document.getElementById("amigo"); //obtengo el elemento
    let nombre = amigo.value.toUpperCase(); // obtengo el valor del campo
    
    if (validarNombre(nombre)){
        if(!amigos.includes(nombre)){
            amigos.push(nombre); //agrego el nombre a la lista 'amigos'
            limpiarCampo(amigoHTML); //limpio el campo
            mostrarAmigos();
        }else{
            alert('El nombre ya esta en la lista');
            limpiarCampo(amigoHTML); //limpio el campo
        }
    }else {
        alert('Ingrese un nombre válido');
        limpiarCampo(amigoHTML); //limpio el campo
    }
    
}

function limpiarCampo(elemento){
    elemento.value='';
}

function mostrarAmigos (){
    var ulHTML = document.getElementById('listaAmigos');
    ulHTML.innerHTML = ''; //Limpio la lista - o la establezco como vacia

    if (amigos.length > 0 ){
        amigos.forEach(element => {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(element));
            ulHTML.appendChild(li);       
        });
    }
}

function sortearAmigo(){
    var ulHTML = document.getElementById('resultado');
    ulHTML.innerHTML = '';
    if (amigos.length > 0){
        var indexAleatorio = Math.floor(Math.random()*amigos.length); //los indices del array van desde 0 a n-1
        ulHTML.innerHTML = amigos[indexAleatorio]; // le asigno al elemento HTML el valor del array de la posicion indexAleatorio;
    }else{
        ulHTML.innerHTML= 'No hay amigos.';
        setTimeout();
    }
}
setTimeout(function() {
            // Selecciona el elemento con el id "mensaje"
            var mensaje = document.getElementById('resultado');
            // Borra el contenido del elemento
            mensaje.innerHTML = '';
        }, 5000);
//funcion para validar nombre 
function validarNombre(nombre) {
    const expReg = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; //expresion regular para validar el nombre

    return expReg.test(nombre); //devuelve true - false
}

