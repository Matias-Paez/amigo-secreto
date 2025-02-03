let amigos = [];

function agregarAmigo (){
    let amigoHTML = document.getElementById("amigo"); //obtengo el elemento
    let nombre = amigo.value; // obtengo el valor del campo

    if (validarNombre(nombre)){
        if(!amigos.includes(nombre)){
            amigos.push(nombre); //agrego el nombre a la lista 'amigos'
            amigoHTML.value = ''; //limpio el campo
        }else{
            alert('El nombre ya esta en la lista');
            amigoHTML.value = ''; //limpio el campo
        }
    }else {
        alert('Ingrese un nombre válido');
        amigoHTML.value = ''; //limpio el campo
    }
    
}

function sortearAmigo(){

}

function validarNombre(nombre) {
    const expReg = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; //expresion regular para validar el nombre

    return expReg.test(nombre); //devuelve true - false
}

