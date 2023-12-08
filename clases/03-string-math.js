

// let nombre = prompt('Ingrese su nombre:');
// let edad = Number(prompt('Ingrese su edad: '));
// let actividad = prompt('Ingrese su actividad favorita:');
// let deporte = prompt('Ingrese su deporte: ');

// let tarjeta = 'Hola mi nombre es ' + nombre + ', tengo ' + edad + 'años, mi actividad favorita es ' + actividad + ' y mi deporte favorito es ' + deporte;

// alert(tarjeta);  
// console.log(tarjeta);


// errores

// let error1 = "el dijo: "hola mundo""
// let error2 =' i'm nicolas'


let solucion1 = "el dijo: 'hola mundo'" ;
// let solucion2 ="i'm nicolas"
let solucion2 = 'I\'m nicolas' ;

let str = 'Couch potato';
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(8));
console.log(str.indexOf('u'));
console.log(str.lastIndexOf('o'));
console.log(str.slice(0,10));
console.log(str.split('c'));
console.log(str.concat('es'));    
console.log(str.length);

let str2 ='999,333,hols'
console.log(str2.charAt(str2.length - 1))
console.log(str2.split(','))

// let tarjeta =  `Hola mi nombre es ${nombre}, y tiene ${nombre.length} letras,
// tengo ${edad} años,
// mi actividad favorita es ${actividad}
// y mi deporte favorito es ${deporte}`
// console.log(tarjeta)
   
   // console.clear() ;

   // Math

   let numRandom = Math.floor(Math.random() *10);

   console.log(numRandom);
   console.log(Math.round(2.8)) //redondea el numero
   console.log(Math.floor(2.8)) //redondea hacia abajo
   console.log(Math.ceil(2.2)) //redondea hacie arriba

console.log(Math.min(3,5,7,9))
console.log(Math.max(5,7,9,8))
console.log(Math.pow(2,2))
console.log(Math.sqrt(256))
console.log(Math.cbrt(64))

let min = 90
let max = 100
console.log(Math.round(Math.random() * (min-max) + max))

console.log(max.toString())
