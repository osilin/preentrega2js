const productos = [{nombre: "Fuente de agua", precio: 15000},
                   {nombre: "Cascada de humo", precio: 1200},
                   {nombre: "Budas -27 cms-", precio: 4000},
                   {nombre: "Sahumerios -Sagrada Familia- 8U.", precio: 500}, 
                   {nombre: "Sahumerios -Palo Santo- 8U.", precio: 360},
                   {nombre: "Bolitas de efumacion. 4U.", precio: 280},
                   {nombre: "Caramelera de vela de soja", precio: 3000},
                   {nombre: "Lampara de sal -Elefante-", precio: 3800},
                   {nombre: "Mandala tejido", precio: 1600},
                   {nombre: "Cuencos de efumacion", precio: 350}]

const carrito = []


function filtrarProducto (){
    let nombre = prompt ("Ingresa el producto a buscar:")
    let resultado = productos.filter ( (producto)=> producto.nombre.toUpperCase().includes (nombre.toUpperCase()) )
    if (resultado.length === 0) {
        console.warn ("No se encontró el producto:", nombre)
    } else { 
           console.table (resultado)
    }
}

class Compra {//Sustantivo, singular, palabra simple, instanciable
    constructor (carritoExpress) {
        this.carrito = carritoExpress
    }
    obtenerPrecio() { // Funcion de orden superior Reduce
        if (this.carrito.length > 0) {
            return this.carrito.reduce ( (total, producto) => total + producto.precio, 0)
        }
    }
}

function finalizar() {
    const fin = new Compra (carrito)
    console.log ("El costo total de su compra es de $", shopping.obtenerPrecio() + ". Muchas gracias por tu compra")
}

function comprar() {
    filtrarProducto ()
    let productoElegido = filtrarProducto()
    //console.log (prendaElegida)
    if (productoElegido !== undefined) {
        carrito.push(prendaElegida)
        alert (productoElegido.nombre.toLocaleUpperCase() + " se agrego al carrito")
        let respuesta = confirm ("¿Deseas llevar otra prenda?")
        if (respuesta === true) {
            comprar() //recursividad: llamar a la misma funcion n cantidad de veces
        } else {
            console.table (carrito)
            finaliza()
        }
    }
}