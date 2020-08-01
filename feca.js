const uuid = require('uuid');
const faker = require('Faker');
const _ = require('underscore');
const { timeStamp } = require('console');

let generadorObjetosFalsos = {
    idx : 0,
    cantidad : 0,
    eventos: {
        onObjetoFalsoGenerado: () => {}, // nunca null
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
    setCantidad(x) {
        this.cantidad = x;
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
        this.idx = this.cantidad;
        this.continuar();
    },
    arrancar : function() {
        this.continuar();
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
