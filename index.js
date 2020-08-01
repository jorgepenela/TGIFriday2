const generadorObjetosFalsos = require('./feca');
const fs = require('fs');
const _ = require('underscore');

generadorObjetosFalsos
    .setCantidad(2000)
    .setEvtObjetoFalsoGenerado(function(objFalso) {
        console.log(objFalso);
        let nombreArchivo = `/var/tmp/usuarios/${objFalso.id}.json`;
        let strObj = JSON.stringify(objFalso);
        fs.writeFile(nombreArchivo, strObj, 'UTF-8', (err) => {
            if (err) {
                console.log(err);
                generadorObjetosFalsos.abortar();
                return;    
            }
            generadorObjetosFalsos.continuar();
        });
    })
    .setEvtOnRecorridaFinalizada(function() {
        console.log('Me voy a comer');
    })
    .arrancar();
    




