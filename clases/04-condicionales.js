// if (true) {
//     console.log('hola')
//     alert('chau')
// }


// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18)  {
// alert('Sos mayor de edad')
// console.log('Sos mayor de edad')
// } else {
//     console.log('Sos menor de edad')
//     alert('Sos menor de edad')
// }

// let num1 = Number(prompt('Ingrese un numero'));

//  if (num1) {
//     console.log(num1);
//     if ((num1 % 2) === 0) {
//     console.log(`El ${num1} es par`)
//     alert(`El ${num1} es par`)
// } else {
//     console.log(`El ${num1} es impar`)
// }
 
//  } else {
//     console.log('ingrese un numero correctamente')
//     alert('ingrese un numero correctamente')

//  }

 //valores falsy
 //0
 //null
 //Nan
 //undefined
 //'' string vacio


let letra = prompt("Ingrese una letra");
if (letra.length > 1) {
    console.log('ingrese solo una letra')
    alert('ingrese solo una letra')
} else {
    switch (letra) {
        case 'a':
            console.log('pa')
            break;
            case 'e':
                console.log('pe')
                break;
            case 'i':
                console.log('pi')
                break;
                case 'o': 
                console.log('po')
                break;
                case 'u':
                    console.log('pu')
                    break;
     
        default:
            console.log('ingrese una letra vocal')
            alert('ingrese una letra vocal')
            
     }
}

 