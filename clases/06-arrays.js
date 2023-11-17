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

let listadoNombres = []
let nombre
do {
     nombre = prompt('ingrese un nombre');
   
if (nombre) {
    listadoNombres.push(nombre)
}
    
} while (nombre);

// console.log(listadoNombres)
//para reemplazar
// listadoNombres[0] = 'UNO'
listadoNombres.splice(0, 3, 'UNO')

for (let i = 0; i < listadoNombres.length; i++) {
    // console.log(listadoNombres[i]);
    console.log(`en la posicion ${i} esta el elemento: ${listadoNombres[i]}`);
}




document.write('hola mundo')