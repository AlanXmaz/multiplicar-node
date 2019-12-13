// const fs = require('fs');
// //const fs = require('express');
// //const fs = require('./fs');


// let base = 6;
// let data = ''

// for (let i = 1; i <= 10; i++) {
//     data += `${ base } * ${ i } = ${ base * i }\n`;
// }


// //const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archico tabla-2 ha sido creado');
// });




// const opts = {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// }

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
//     .command('crear', 'Genera un archivo', opts)
//     .help()
//     .argv;
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
// console.log('Base', argv.base);
// console.log('Limite', argv.limite);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(require => console.log('Listado'))
            .catch(e => console.log(e));
        // console.log('Base', argv.base);
        // console.log('Limite', argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}



// console.log(process.argv);

// let argv2 = process.argv;


// console.log('Base', argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);