const {registrar, leer} = require('./operaciones.js')
const process = require('process')

const elementos = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];
//const elementos = process.argv;
//const elementos =[nombre, edad, animal, color, enfermedad]
//const archivo = 'citas.json'
//addCita(elementos);
//leerCita(archivo)


if(elementos === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}

if(elementos === "leer"){
    leer()
}
