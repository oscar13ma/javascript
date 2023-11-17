//recibir dos valores y operaciones a realizar  buscar!!!!


let num1 = Number(prompt('ingrese el primer factor'))
let num2 = Number(prompt('ingrese el segundo  factor'))
let operacion = prompt('ingrese la operacion a realizar')

console.log(num1)
console.log(num2)


if (isNaN(num1)) {
    num1 = 0;


}

if (isNaN(num2))  {

    num2 = 0;

}

console.log(num1)
console.log(num2)
console.log(operacion)

switch (operacion) {
    case '+':
        console.log(`El resultado de ${num1} + ${num2} = ${num1 + num2}`); 
        
        break;
        case '-':
        console.log(`El resultado de  ${num1} - ${num2} + ${num1 - num2}`)
        break;
        case '*': 
        console.log(`El resultado de  ${num1} * ${num2} * ${num1 * num2}`)
        break;
        case '/': 
        console.log(`El resultado de  ${num1} / ${num2} / ${num1 / num2}`)
        break; 
    default:

        console.error(`La operacion ${operacion} no existe en esta calculadora`)
        break;
}
