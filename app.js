const argv = require('./conf/yargs').argv;
const colors = require('colors')
const hacer = require('./logica/Logic');
let comand = argv._[0];
switch (comand) {
    case 'Crear':
        let tarea = hacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'Listar':
        let listar = hacer.listar();
        for (let tarea of listar) {
            console.log('=========== GAAAA ========='.red)
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado)
            console.log('==========================='.green)
        }
        break;
    case 'Actualizar':
        let actualizar = hacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'Borrar':
        let borrar = hacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comand err')
};