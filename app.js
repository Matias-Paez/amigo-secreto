let amigos = []; // array de amigos

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
        ulHTML.innerHTML = `Ganador :  ${amigos[indexAleatorio]}` ; // le asigno al elemento HTML el valor del array de la posicion indexAleatorio;
        document.getElementById('btn-sorteo').setAttribute('disabled', 'true'); //desabilito el btn sortear amigo
        document.getElementById('btn-reiniciar').removeAttribute('disabled'); // quito la propiedad disabled del boton reiniciar
    }else{
        ulHTML.innerHTML= 'No hay amigos.';
        // limpio el campo luego de 5 segundos
        setTimeout( () => {
            ulHTML.textContent = '';

        }, 5000);
        return;
    }
}

//funcion para validar nombre 
function validarNombre(nombre) {
    const expReg = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; //expresion regular para validar el nombre

    return expReg.test(nombre); //devuelve true - false
}

function condicionesIniciales(){
    ulAmigosHTML = document.getElementById('listaAmigos').innerHTML ='';
    amigos = [];
    document.getElementById('btn-reiniciar').setAttribute('disabled', 'true'); //desabilito el btn sortear amigo
    document.getElementById('btn-sorteo').removeAttribute('disabled'); // quito la propiedad disabled del boton reiniciar
    ulHTML = document.getElementById('resultado').innerHTML = '';
}