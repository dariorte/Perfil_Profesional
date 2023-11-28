// ######## TIPO DE VARIABLES
// const para constantes
const pi = 3.1416;
const pul = 2.54;
// var variables globales
var cant_days = 10;
var name = "Ivan Amaya";
// let para variables de bloque o clases
let count = 5;
let i = 0;

// ###### FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Ivan Amaya</h1>"
document.getElementById("text_two").innerText = "<h1>Ivan Amaya</h1>"
// librerias por ejemplo sweealert2
Swal.fire({
    icon: 'success',
    title: 'Ivan Amaya',
    text: 'Estudinate de la ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#fff',
});

// ######## TIPO DE DATOS
// Numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// Booleanos
let boolean = true; //false
// array
let array_num = [1, 2, 3, 4, 5, 6];
let array_text = ["Lunes", "Martes", "Miercoles", "jueves", "viernes", "sabado", "domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    { name: "Ivan", last_name: "Amaya", age: 18 },
    { name: "Ayelid", last_name: "Arevalo", age: 19 },
    { name: "Natalia", last_name: "Cardenas", age: 21 },
    { name: "Antonella", last_name: "Amaya", age: 1 }
];
// ###### OPERADORES BASICOS
// SUMA
var suma = number_one + number_two;
console.log("Suma = " + suma);
// RESTA
var resta = number_one - number_two;
console.log("Resta = " + resta);
// MULTIPLICACION
var multi = number_one * number_two;
console.log("Multiplicacion = " + multi);
// DIVISION
var div = number_one / number_two;
div = div.toFixed(2);
console.log("Divison = " + div);
// MODULO
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);

console.log(
    "Suma = " + suma + "\n"+
    "Resta = " + resta +"\n"+
    "Multiplicacion = " + multi +"\n"+
    "Divison = " + div +"\n"+
    "Modulo = " + modulo )

var respuesta ="Suma = " + suma + "<br>" +"Resta = " + resta + "<br>" + "Multiplicacion = " + multi + "<br>" +"Divison = " + div + "<br>" + "Modulo = " + modulo ;
Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff',
});
// ##### OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (i)
// AND &&(ampersan) con if
var bool    = false;
var numeric = 5;
if(!bool && numeric === 5){ // bool == true, al hacer eso me ahorro escribir esto completo 
    console.log("Ingresa if: " + bool);
} 
else {
    console.log("Ingresa else: " + bool);
}
// En el parcial nos va a poner preguntas sobre js 
// = asiganar un valo, == igual a, === me mira si el numero y el tipo de dato son iguales
// OR || con if
var age = 31;
if(age == 31 || numeric == "5"){
    console.log("ingresa if: " + age)
    age++;
}
else{
    console.log("Ingresa else: " + age)
}
console.log(age);

//FOR
console.log(array_text.length)// con esto leemos el valor que tiene un vector o array
for(let i=0; i<array_text.length; i++){
    console.log(array_text[i] + (i + 1));// + i, coquetanación
}

//WHILE
let j = 0;
while(j<array_text.length){
    console.log(array_text[j] + (j + 1));
    j++;
}
// DO WHILE
let w = 0;
do{
    console.log(array_text[j] + (j + 1));
    w++;
}while(w<array_text.length)

// CREAR FUNCIONES
function load_page(){ // cuando se carga la pagina, va a preguntar en el parcial sobre eventos  
    alert("Bienvenido a mi sitio web")
}

var color = "#fff"
function change_color(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = color;
}

const btn_clear = document.querySelector("#limpiar");
btn_clear.addEventListener("click", () =>{ //evento de escucha
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000";
});

//FORMULARIO DE REGISTRO, limpiar por partes pregunta del parcial
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos")
const validation    = document.getElementById("validation")

form_register.addEventListener("submit", event_name =>{ 
    event_name.preventDefault();
    let info = "";
    if(nombres.ariaValueMax.length <= 2 || apellidos.ariaValueMax.length<= 2 ){
        info += "Nombres y o apellidos deben ser mayores a 2 letras";
        validation.style.backgroundColor;
    }
});

function loasd_page() {
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date ();
    console.log (date.getFullYear);

    for (let a =0 ;a< array_mul.length;a++) {
        console.log(array_mul[a].name);
        
    }

}
function validate() {
    // alert("FÙNCIONA");
    let nombres_uno = document.getElementById("nombres").value;
    console.log (nombres_uno.length);
    if (nombres_uno.length > 2) {
        document.getElementById("apellidos").disabled = false;
        document.getElementById("nombres").focus();
        alert(nombres.indexOf("Amaya"));
    }
}

function limpiar() {
    let nombres_uno = document.getElementById("nombres").value;
}

