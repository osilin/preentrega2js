class Operacion {
    constructor (carritoExpress) {
        this.carrito = carritoExpress
    }
    obtenerSaldo() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce ((total, producto)=> total + producto.precio, 0)
        }
    }
}