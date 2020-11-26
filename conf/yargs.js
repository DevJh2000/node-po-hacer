const { command } = require('yargs');
const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        dsc: 'una descripcion crear por hacer'
    }
};
const completado = {
    completado: {
        defaul: true,
        alias: 'c',
        dsc: 'una descripcion actualizar2 por hacer'
    }
};
const argv = require('yargs').command('Crear', 'Crea un elemento por hacer', {
    descripcion
}).command('Actualizar', 'Actualiza un elemento por hacer', {
    descripcion,
    completado
}).command('Listar', 'Lista elementos por hacer', {
    descripcion
}).command('Borrar', 'Borra un objeto por hacer', {
    descripcion
}).help().argv;
module.exports = {
    argv
}