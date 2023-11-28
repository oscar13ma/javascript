//PRODUCTO EJERC 2



class Producto {
    constructor (codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }


    imprimeDatos() {
        console.log(`Codigo: ${this.codigo}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log('=====================');
    }
}

const productos = []


let veces = Number(prompt('Cuantos productos va a ingresar?'));


for (let i = 0; i < veces; i++) {
    let nombre = prompt('ingrese el nombre del producto');
    let precio = Number(prompt('ingrese un precio'))
    const nuevoProducto = new Producto(`art${i}`, nombre, precio);

    productos.push(nuevoProducto);



}


productos.forEach((prod)  => {
    prod.imprimeDatos();
});

// productos.push(new Producto('A1', 'Remera', '12000'));
// productos.push(new Producto('A2', 'Pantalon', '23000'));
// productos.push(new Producto('A3', 'Zapatillas', '25000'));

// console.log(productos)

// productos[0].imprimeDatos();
// productos[1].imprimeDatos();
// productos[2].imprimeDatos();




