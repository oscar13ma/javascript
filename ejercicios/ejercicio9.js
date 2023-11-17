//escribe un programaque pida una frase
//y vocales que aparcen

// let frase = prompt('ingrese una frase')
// let vocales = '';

    // console.log(frase);
    // console.log
// let i = 0;
// console.log(frase.length);
// console.log(frase.charAt(10));


// while (i < frase.length) {
    // console.log(`la letra en posicion ${i} es ${frase.charAt(i)}`);

    // if (
    //     frase.charAt(i).toLowerCase() == 'a'  || 
    //     frase.charAt(i).toLowerCase() == 'e'  || 
    //     frase.charAt(i).toLowerCase() == 'i'  || 
    //     frase.charAt(i).toLowerCase() == 'o'  || 
    //     frase.charAt(i).toLowerCase() == 'u'  
    // ) {
        // console.log(frase.charAt(i).toLowerCase());
        //  vocales += frase.charAt(i).toLowerCase();
    //     vocales = vocales + frase.charAt(i).toLowerCase() + '-';
    // }


//     i++;
// }

//     if (vocales.length > 0) {
//         console.log('las vocales son: ', vocales);
        
//     } else {
//         console.log(`tu frase "${frase}" no tiene vocales`);
//     }

// console.log(vocales);


//FOR
let frase = prompt('ingrese una frase')
let vocales = '';

    // console.log(frase);
    // console.log
let i = 0;
console.log(frase.length);
console.log(frase.charAt(10));


for ( let i = 0; i < frase.length; i++) {
    // console.log(`la letra en posicion ${i} es ${frase.charAt(i)}`);

    if (
        frase.charAt(i).toLowerCase() == 'a'  || 
        frase.charAt(i).toLowerCase() == 'e'  || 
        frase.charAt(i).toLowerCase() == 'i'  || 
        frase.charAt(i).toLowerCase() == 'o'  || 
        frase.charAt(i).toLowerCase() == 'u'  
    ) {
        // console.log(frase.charAt(i).toLowerCase());
        //  vocales += frase.charAt(i).toLowerCase();
        vocales = vocales + frase.charAt(i).toLowerCase() + '-';
    }



}

    if (vocales.length > 0) {
        console.log('las vocales son: ', vocales);
        
    } else {
        console.log(`tu frase "${frase}" no tiene vocales`);
    }
