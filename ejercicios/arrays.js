//crear un array llamado meses y que almacene el nombre de los 12 meses del año. mostrarpor pantalla
//en forma de listalos 12 nombres del arreglo

const meses = ['enero', 'febrero', 'marzo', 'abril']


let mesesPantalla = `<ol>`
for (let index = 0; index < meses.length; index++) {
    mesesPantalla += `<li>${meses[index]}</li>`;
    if (index === meses.length - 1) {
        mesesPantalla += '</ol>'
    }
}

document.write(mesesPantalla);
