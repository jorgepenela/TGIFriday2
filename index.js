const generadorObjetosFalsos = require('./feca');
const fs = require('fs');
const _ = require('underscore');

/*
const objGen = generarObjetosFalsos(5000);
const strObjGen = JSON.stringify(objGen);

let nombreArchivo = `/var/tmp/usuarios/${objGen.id}.json`;
fs.writeFile(nombreArchivo, strObjGen, 'UTF-8', (err) => {
    console.log(err);
});
*/

/*
const arrUsu = generarObjetosFalsos(5);

(function wrapper() {
    let idx = 0;
    (function innerFn() {
        if (idx < 5) {
            console.log(arrUsu[idx]);
            idx++;
            _.delay(innerFn, 5000);        
        }
    })();
})();

*/

generadorObjetosFalsos
    .setEvtObjetoFalsoGenerado(function(objFalso) {
        console.log(objFalso);
        _.delay(function() {
            generadorObjetosFalsos.continuar();
        }, 2000);
    })
    .setEvtOnRecorridaFinalizada(function() {
        console.log('Me voy a comer');
    });

generadorObjetosFalsos
    .setCantidad(2)
    .generarObjetosFalsos();

    




