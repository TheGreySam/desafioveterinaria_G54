const fs = require('fs');
//const { argv } = require('process');

const archivo = 'citas.json'
function registrar(nombre, edad, animal, color, enfermedad) {
    try {
        let cita = [];
        cita.push({nombre, edad, animal, color, enfermedad})
        fs.writeFileSync(archivo, JSON.stringify(cita));
        console.log("Cita guardada con exito")
    } catch (error) {
        console.error('Error al guardar', error)
    }
};

/* function leerCita() {
    try {
        if (fs.existsSync(archivo)) {
            const info = fs.readFileSync(archivo, 'utf-8');
            const citas = JSON.parse(info);
            console.log(citas);
            return citas
        } else {
            console.log('No se encuentran citas guardadas');
            return [];
        }
    } catch (error) {
        console.error(error)
    }
}; */
 
function leer() {
    const data = fs.readFileSync(archivo, 'utf-8');
    datos = JSON.parse(data);
    console.log(datos)
}

module.exports = { registrar, leer }