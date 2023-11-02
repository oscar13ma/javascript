// parseint numero entero
// y tambien puedo usar number
let num1 = Number(prompt('ingrese su primer numero: ')) ;        
let num2 = (prompt('ingrese su segundo numero: ')) ;

console.log('Num1 = ', num1) ; 
console.log('Num2 = ', num2) ;

// num1 += 5;

// let suma = num1 + num2;
// // alert(suma);
// console.log('Suma = ', suma) ;

// let resta = num1 - num2 ;
// console.log('Resta = ', resta) ;

// let division = num1 / num2 ;
// console.log('Division = ', division);

// let resto = num1 % num2;
// console.log('Resto = ', resto);


// // operadores unitarios

// // incremento

// num1++;
// console.log('incremento: ', num1) ;

// num2--;
// console.log('decremento: ', num2) ;



// let verdadero = true;
// let falso = !true;

// operadores relacionales
console.log(num1 == num2) ;
console.log(num1 != num2) ;
console.log(num1 + ' y ' + num2 + ' son iguales? ', num1 == num2)
console.log(num1 + ' es mayor que ' + num2 + ' ? ', num1 > num2)
console.log(num1 + ' es menor que ' + num2 + ' ? ', num1 < num2)
console.log(num1 + ' es menor o igual que ' + num2 + ' ? ', num1 <= num2)
console.log(num1 + ' es menor o igual que ' + num2 + ' ? ', num1 >= num2)
console.log(num1 + ' y ' + num2 + ' son estrictamente iguales? ', num1 === num2)
console.log(num1 + ' y ' + num2 + ' son estrictamente diferentes?  ', num1 !== num2)

// operadores logicos

console.log('AND: ', true && true) ;
console.log('AND: ', true && false) ;
console.log('AND: ', false && true) ;
console.log('AND: ', false && false) ;


console.log('OR: ', true || true) ;
console.log('OR: ', true || false) ;
console.log('OR: ', false || true) ;
console.log('OR: ', false || false) ;

console.log('NOT: ', !true);
console.log('NOT: ', !false);