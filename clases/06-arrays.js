// let myArray = [1, "pedro", true, false,]
// let frase = 'hola mundo'
// console.log(myArray)

// frase = frase + ' como estan?'
// console.log(frase)
// console.log(myArray[1]);
// let limite = myArray.length;

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
//     if(i <= limite) {
//         myArray.push("juan")
//     }
// }

// let listadoNombres = []
// let nombre
// do {
//      nombre = prompt('ingrese un nombre');
   
// if (nombre) {
//     listadoNombres.push(nombre)
// }
    
// } while (nombre);

// console.log(listadoNombres)
//para reemplazar
// listadoNombres[0] = 'UNO'
// listadoNombres.splice(0, 3, 'UNO')

// for (let i = 0; i < listadoNombres.length; i++) {
//     // console.log(listadoNombres[i]);
//     console.log(`en la posicion ${i} esta el elemento: ${listadoNombres[i]}`);
// }




// document.write('hola mundo')


const alumnos = ['oscar', 'eduardo', 'pablo'];

//agregamos un elemento al final
alumnos.push('german','ivan');
//agregamos un elemento al princio
alumnos.unshift('guaso');
//eliminar un elemento (ultimo)
// alumnos.pop()
//eliminar el primero
// alumnos.shift()
//MOSTRAR el ultimo elemento en un array
console.log(alumnos.at(-1))
console.log(alumnos.at(1))
console.log(alumnos[alumnos.length - 1])


//la posicion / index de un elemento
let pos = alumnos.indexOf('oscar')

console.log(pos)
//saber si un elemnto existe en un arrays
console.log(alumnos.includes('oscar'))

const profes = ['nico', 'enrico']
const comision87i = alumnos.concat(profes);

console.log(alumnos)
console.log(comision87i)
console.log(comision87i.sort())
console.log(comision87i.reverse())




