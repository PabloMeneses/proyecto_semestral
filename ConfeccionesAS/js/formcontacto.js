var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var clave = document.getElementById("password");

const formulario = document.getElementById("form");
var msj = document.getElementById("warnings");

formulario.addEventListener('submit',e =>{
    e.preventDefault();
    let msjMostrar ="";
    let enviar = false;
    if(nombre.value.length < 4 || nombre.value.length > 10 ){
        msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }
    var letra = nombre.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar += "<br>El nombre debe comenzar con mayúscula";
        enviar = true;
    }

    if(nombre.value == 'Victor'){
        msjMostrar += "El nombre no puede ser Victor";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
    }
    else
        msj.innerHTML = "Enviado";
});

function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}