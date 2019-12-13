const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, rejesct) => {

        console.log('======================'.green);
        console.log(`==Tabla de ${ base }==`.red);
        console.log('======================'.green);

        if (!Number(base)) {
            rejesct(`El valor introducido de base ${ base } no es un numero.`);
            return;
        } else if (!Number(limite)) {
            rejesct(`El valor introducido de limite ${ limite } no es un numero.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }\n`);
        }

    });


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejesct) => {

        if (!Number(base)) {
            rejesct(`El valor introducido ${ base } no es un numero.`);
            return;
        }


        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                rejesct(err)
            else
                resolve(`Tabla-${ base }-al-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}