// dot notation

let obj = {
    cantidad : 0,
    setearCantidad: function (i) {
        this.cantidad = i;
        return this;
    },
    mostrarCantidad: function () {
        console.log(this.cantidad);
        return this;
    }
}

obj
  .setearCantidad(300)
  .mostrarCantidad()
  .setearCantidad(200)
  .mostrarCantidad();

