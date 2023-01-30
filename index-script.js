// Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:
//nombre, apellido, nombre de usuario en platzi, edad, correo electronico, mayor de edad, dinero ahorrado, deudas

let nombre = "Camilo";
let apellido = "Rodriguez";
let usuarioPlatzi = "Micifuz";
let edad = 32;
let correo = "titanasura@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 100000;
let deudas = 1500000;

let nombreCompleto = nombre + " " + apellido;
let dineroTotal = dineroAhorrado - deudas;

function mensaje() {
    let nombre = "Camilo";
    let apellido = "Rodriguez";
    let usuarioPlatzi = "Micifuz";
    let edad = 32;
    let correo = "titanasura@gmail.com";
    let mayorDeEdad = true;
    let dineroAhorrado = 100000;
    let deudas = 1500000;

    return console.log("Mi nombre es: "+ nombre + " " + apellido + " , pero prefiero que me digas: " + usuarioPlatzi);
}