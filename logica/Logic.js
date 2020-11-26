const fs = require('fs');
let crearhacer = [];
//Guardamos datos en un archivo JSON.
const guardardb = () => {
    //Convertimos los datos del arreglo a datos que se puedan almacenar en el JSON.
    let datos = JSON.stringify(crearhacer);
    //Grabamos en el archivo JSON los datos.
    fs.writeFile('db/data.json', datos, (err) => {
        if (err) {
            throw new error('No se pudo grabar', err);
        }
    });
};
const cargardatosdb = () => {
    try {
        crearhacer = require('../db/data.json');
    } catch (error) {
        crearhacer = [];
    }
};
//Insertamos datos en un archivo JSON.
const crear = (descripcion) => {
    //Cargamos la base de datos JSON.
    cargardatosdb();
    //Almacenamos los datos ingresados.
    let porcrear = {
        descripcion,
        completado: false
    };
    //Guardamos los datos en el archivo JSON.
    crearhacer.push(porcrear);
    guardardb();
    return porcrear;
};
//Listamos los datos del archivo JSON.
const listar = () => {
    //Cargamos la base de datos JSON.
    cargardatosdb();
    return crearhacer;
};
//Actualizar datos del archivo JSON.
const actualizar = (descripcion, completado = true) => {
    //Cargamos la base de datos JSON.
    cargardatosdb();
    //Capturamos el indice del datos que sea igual con el datos que se haya ingesado.
    let index = crearhacer.findIndex(tarea => tarea.descripcion === descripcion);
    //Si el indice capturado no es negativo actualizamos el "completado" del dato y guardamos en el JSON.
    if (index >= 0) {
        //Reemplazamos el dato en el JSON.
        crearhacer[index].completado = completado;
        //Guardamos los datos en el archivo JSON.
        guardardb();
        return crearhacer;
    } else {
        return false;
    }
};
//Eliminamos datos del archivo JSON.
const borrar = (descripcion) => {
    //Cargamos la base de datos JSON.
    cargardatosdb();
    //Capturamos los datos del JSON y eliminamos el dato ingresado. 
    let nuevolist = crearhacer.filter(tarea => tarea.descripcion !== descripcion);
    //Si la lista anterior es igual a la lista actual en el archivo JSON retornamos false.
    if (crearhacer.length === nuevolist.length) {
        return false;
    } else {
        //Definimos  la nueva lista de datos para el archivo JSON.
        crearhacer = nuevolist;
        //Guardamos los datos en el archivo JSON.
        guardardb();
        return true;
    }
};
module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}