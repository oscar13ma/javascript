//recibir dos valores y operaciones a realizar  buscar!!!!





let num1 = Number(prompt('Ingrese el primer factor'))
let num2 = Number(prompt('Ingrese el segundo factor'))
let operacion = prompt('ingrese la operacion a realizar')


if (isNaN(num1)) {
    console.log('el num1 es NaN')
   num1 = 0;
   }
if (isNaN(num2)) {
    console.log('el num2 es NaN')
    num2 = 0;
    }
    console.log(num1)
console.log(num2)
console.log(operacion)


function calculadora(factor1, factor2, operacion ) {
    if (isNaN(factor1)) {
        
    return alert(`el factor1 ${factor1}, no es un numero`)
    
    }
    
    if (isNaN(factor2))  {
    
       
        return alert(`el factor2 ${factor2}, no es un numero`)
    }
    
    // alert(factor1)
    // alert(factor2)
    // alert(operacion)
    
    switch (operacion) {
        case '+':
         case 'suma':   
            alert(`El resultado de ${num1} + ${num2} = ${num1 + num2}`); 
            
            break;
            case '-':
                case'resta':
            alert(`El resultado de  ${num1} - ${num2} = ${num1 - num2}`)
            break;
            case '*': 
            case 'multiplicacion':
            alert(`El resultado de  ${num1} * ${num2} = ${num1 * num2}`)
            break;
            case '/':
                case 'division': 
            alert(`El resultado de  ${num1} / ${num2} = ${num1 / num2}`)
            break; 
        default:
    
            console.error(`La operacion ${operacion} no existe en esta calculadora`)
            break;
    }
    


let confirmacion;

do {
    let num1 = Number(prompt('ingrese el primer factor'))
let num2 = Number(prompt('ingrese el segundo  factor'))
let operacion = prompt('ingrese la operacion a realizar')


calculadora(num1, num2, operacion);

 confirmacion = confirm('queres hacer otra operacion?')

} while (confirmacion)
