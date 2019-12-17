//Creación de las variables que contienen las letras y los caracteres que se pueden usar
let letras = 'abcdefghijklmnopqrstuvwxyz';
let simbolos = "!#$%&()*+,-.:;<=>?@[]^_{|}~";

//Función que se encarga de modificar el valor de la longitud seleccionada
function modificar() {
    var spanValor = $("#valor")[0];
    spanValor.innerHTML = this.value;
}

//Función que genera la contraseña
function pass(digit, symbol){
    
    var password = '';
    var longitud = parseInt($("#longitud")[0].value); //Obtiene la longitud que debe tener la contraseña

    //Condicional para generar contraseñas de los caracteres en minúsculas y mayúsculas
    if(!digit && !symbol){
        for (let i = 0; i < longitud; i++) {
            var aleat = Math.floor(Math.random() * (10 - 1)) + 1; //Generación de un número aleatorio para saber si la letra es minúscula o mayúscula
            if(aleat >= 1 && aleat <= 5){
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                password += letras[num];
            }
            else{
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                var mayus = letras[num].toUpperCase();
                password += mayus;
            }
        }
    }
    //Condicional para generar contraseñas de los caracteres en minúsculas, mayúsculas y números
    else if(digit && !symbol){
        for (let i = 0; i < longitud; i++) {
            var aleat = Math.floor(Math.random() * (10 - 1)) + 1; //Generación de un número aleatorio para saber si la letra es minúscula, mayúscula o es un número
            if(aleat >= 1 && aleat <= 3){
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                password += letras[num];
            }
            else if(aleat >3 && aleat <= 6){
                password += Math.floor(Math.random() * (10 - 0)) + 0;
            }
            else{
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                var mayus = letras[num].toUpperCase();
                password += mayus;
            }
        }
    }
    //Condicional para generar contraseñas de los caracteres en minúsculas, mayúsculas y caracteres
    else if(!digit && symbol){
        for (let i = 0; i < longitud; i++) {
            var aleat = Math.floor(Math.random() * (10 - 1)) + 1; //Generación de un número aleatorio para saber si la letra es minúscula, mayúscula o es un caracter
            if(aleat >= 1 && aleat <= 3){
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                password += letras[num];
            }
            else if(aleat >3 && aleat <= 6){
                var num = Math.floor(Math.random() * (10 - 0)) + 0;
                password += simbolos[num];
            }
            else{
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                var mayus = letras[num].toUpperCase();
                password += mayus;
            }
        }
    }
    //Condicional para generar contraseñas de los caracteres en minúsculas, mayúsculas, números y caracteres
    else{
        for (let i = 0; i < longitud; i++) {
            var aleat = Math.floor(Math.random() * (17 - 1)) + 1; //Generación de un número aleatorio para saber si la letra es minúscula, mayúscula, un número o un caracter
            if(aleat >= 1 && aleat <= 4){
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                password += letras[num];
            }
            else if(aleat >= 5 && aleat <= 8){
                password += Math.floor(Math.random() * (10 - 0)) + 0;
            }
            else if(aleat >= 9 && aleat <= 12){
                var num = Math.floor(Math.random() * (10 - 0)) + 0;
                password += simbolos[num];
            }
            else{
                var num = Math.floor(Math.random() * (letras.length - 0)) + 0;
                var mayus = letras[num].toUpperCase();
                password += mayus;
            }
        }
    }

    return password; //Devuelve la contraseña generada a la función 'generar'
}

//Función que se encarga de comprobar la seguridad de la contraseña
function comprobar(contrasenia, n, s){
    var long = contrasenia.length;

    if(long <= 15){
        $("#control").css('width','25%');
        $("#control").css('background-color','red');
        if(n && s && long >= 13){
            $("#control").css('width','75%');
            $("#control").css('background-color','yellow');
        }
        else if((!n && s) || (n && !s)){
            $("#control").css('width','50%');
            $("#control").css('background-color','orange');
        }
    }
    else if(long > 15 && long <= 22){
        $("#control").css('width','50%');
        $("#control").css('background-color','orange');
        if(n && s && long >= 20){
            $("#control").css('width','100%');
            $("#control").css('background-color','green');
        }
        else if((!n && s) || (n && !s) || (n && s)){
            $("#control").css('width','75%');
            $("#control").css('background-color','yellow');
        }
    }
    else{
        $("#control").css('width','75%');
        $("#control").css('background-color','yellow');
        if((!n && s) || (n && !s) || (n && s)){
            $("#control").css('width','100%');
            $("#control").css('background-color','green');
        }
    }
}

//Función que se encarga de optener los parámetros con los que se tiene que generar la contraseña
function generar(){
    event.preventDefault();
    var numeros = false;
    var caracteres = false;
    var contrasenia = '';
    var check = $('[type=checkbox]'); //Obtiene los checkbox que hay en el docuemnto

    //Bucle que se encarga de saber si hay que añadir números, caracteres o ambas cosas a la contraseña
    for (let i = 0; i < check.length; i++) {
        if(check[i].checked){
            if(check[i].value == 'num'){
                numeros = true;
            }
            if (check[i].value == 'car'){
                caracteres = true;
            }
        }
    }

    contrasenia = pass(numeros, caracteres); //Llamada a la función que genera la contraseña

    $("#contrasenia")[0].innerText = contrasenia; //Muestra la contraseña por pantalla

    comprobar(contrasenia, numeros, caracteres); //Comprobación de la seguridad de la contraseña (según mis criterios)
}

//Función que se encarga de mostrar el valor inicial del rango
function inicio(){
    var valorRango = $("#longitud")[0];
    var spanValor = $("#valor")[0];

    spanValor.innerHTML = valorRango.value;
}

//Espera a que el documento esté cargado para cargar la función 'inicio'
$(document).ready(inicio);

//Aplica los eventos 'change' y 'click' a los elementos con los id 'longitud' y 'generar', respectivamente
$("#longitud").change(modificar);
$("#generar").click(generar);