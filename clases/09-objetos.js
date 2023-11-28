const alumno = {
nombre : "german",
apellido : "valoy",
edad : "25",
curso : "fullstack",

saludar: function () {
    console.log(`Hola! soy ${this.nombre}`)
},
estudiar() {
    console.log('resumiendo...leyendo...');
},
presentarse: function () {
    console.log(`Nombre: ${this.nombre}
    apellido: ${this.apellido}
    
    `);
}
};

// obtencion de valores
alumno.nombre;
console.log(alumno["edad"])
// agregar propiedades nuevas
let ciudad = prompt('ingrese su ciudad')
alumno.ciudad = ciudad
let nuevaPropiedad = prompt("agrega una nueva propiedad")
let nuevaPropValor = prompt(`ingrese el valor de la propiedad ${nuevaPropiedad}`)
alumno[nuevaPropiedad] = nuevaPropValor; 
//modificar propiedades

alumno.edad = 31;
// alumno.edad = prompt('ingrese su edad')

 //eliminar propiedad

 delete alumno.curso

//recorrer un objeto
//  console.log(Object.keys(alumno))

 for ( const key in alumno) {
    if(typeof alumno[key] !== 'function') {

        console.log(`la clave: ${key}, tiene el valor: ${alumno[key]}`)
    // console.log(typeof alumno[key])
    }

    
    
    
   }
    
  const listaProductos = [
        {
            Titulo: 'teclado',
            descripcion : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quisquam provident iusto suscipit? Recusandae ea earum, nulla suscipit iure omnis architecto. Necessitatibus dignissimos sunt pariatur culpa aspernatur nihil adipisci soluta atque neque.',
            precio: 200,


        },
        {   Titulo: 'mouse',
            descripcion : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quisquam provident iusto suscipit? Recusandae ea earum, nulla suscipit iure omnis architecto. Necessitatibus dignissimos sunt pariatur culpa aspernatur nihil adipisci soluta atque neque.',

            precio: 400, 
        },
        {  Titulo: 'monitor',
           descripcion : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quisquam provident iusto suscipit? Recusandae ea earum, nulla suscipit iure omnis architecto. Necessitatibus dignissimos sunt pariatur culpa aspernatur nihil adipisci soluta atque neque.',
           precio: 300, 
    },
    ]   //hasta 1:52

    
//  listaProductos.forEach( function (producto) {
//     console.log(`El producto: ${producto.titulo} cuesta: ${producto.precio}`);


//  });
 function recorrerProductos(producto) {
    console.log(`El producto: ${producto.Titulo} cuesta: ${producto.precio}`);

};

listaProductos.forEach(recorrerProductos);
    
 
    // function recorrerProductos(producto) >= {
    //     console.log(`El producto: ${producto.titulo} cuesta: ${producto.precio}`
    
    
    //     )};



// console.log(this)
// console.log(alumno);
// alumno.saludar();
// alumno.estudiar();
// alumno.presentarse();
// document.write(alumno);
// alert(alumno);