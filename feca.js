const uuid = require('uuid');
const faker = require('Faker');
const _ = require('underscore');

let generadorObjetosFalsos = {
    idx : 0,
    cantidad : 0,
    eventos: {
        onObjetoFalsoGenerado: _.identity,
        onRecorridaFinalizada: _.identity 
    },
    setEvtObjetoFalsoGenerado(fn) {
        this.eventos.onObjetoFalsoGenerado = fn;
        return this;
    },
    setEvtOnRecorridaFinalizada(fn) {
        this.eventos.onRecorridaFinalizada = fn;
        return this;
    },
    setCantidad(cantidad) {
        this.cantidad = cantidad;
        return this;
    },
    generarObjetosFalsos : function() {
        if (this.idx == this.cantidad) {
            this.eventos.onRecorridaFinalizada();
            return;
        }
        this.idx++;
        const objGenerado = this.generarUnObjetoFalso();
        this.eventos.onObjetoFalsoGenerado(objGenerado);
    },
    continuar : function() {
        this.generarObjetosFalsos();
    },  
    abortar : function() {

    },
    generarUnObjetoFalso : function() {
        return {
            id : uuid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            city: faker.address.city(),
            streetName: faker.address.streetName(),
            country: faker.address.country(),
            accountName: faker.finance.accountName(),
            account: faker.finance.account(),
            amount: faker.finance.amount()
        }
    }
}

module.exports = generadorObjetosFalsos;
