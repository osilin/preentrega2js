const carrito = []

const productos = [{id: 111, nombre: "Fuente", precio: 15000},
                   {id: 222, nombre: "Cascada", precio: 1200},
                   {id: 333, nombre: "Budas", precio: 4000},
                   {id: 444, nombre: "Sahumerios SF", precio: 500}, 
                   {id: 555, nombre: "Bolitas efumacion", precio: 280},
                   {id: 666, nombre: "Caramelera", precio: 3000},
                   {id: 777, nombre: "Lampara de sal", precio: 3800},
                   {id: 888, nombre: "Mandala", precio: 1600},
                   {id: 999, nombre: "Cuencos", precio: 350}]




function comprarProducto (nombre) {
    let resultado = productos.find ( (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase() )
    return resultado
}


function finalizarOperacion () {
    const compra = new Operacion (carrito)
    console.log ("El costo final de la compra es de $", compra.obtenerSaldo() + ". Muchas gracias.")
}

function operar () {
    let nombreProducto = prompt ("Ingresa el nombre del producto:")
    let prodObt = comprarProducto (nombreProducto)
    if (prodObt !== undefined) {
        carrito.push (prodObt)
        alert (prodObt.nombre.toLocaleLowerCase() + " se añadió al carrito")
        let confirmacion = confirm ("¿Deseas obtener otro producto?")
        if (confirmacion === true){
            operar ()
        } else {
            console.table (carrito)
            finalizarOperacion ()
        }
    }
}

