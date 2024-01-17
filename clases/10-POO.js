
//despues completar tal cual esta en clases
class Alumno {
    constructor(apellido, nombre, edad, curso) {
        this.apellido = apellido
        this.nombre = nombre
        this.curso = curso
        this.edad = edad

    }
    saludar() {
                console.log(`Hola! soy ${this.nombre}`)
                
    }
}
const alumno = new Alumno('valoy', 'german', '25', 'fullstack')
const alumno2 = new Alumno('mamani', 'oscar', '31', 'fullstack')

console.log(alumno);
console.log(alumno2);
alumno.saludar();
alumno2.saludar();
//###########################################//

class Persona {
    constructor(nombre, apellido, edad = 31) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad; 
    }
saludar() {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);

           }


}



const persona1 = new Persona('Oscar', 'Mamani');
const persona2 = new Persona('Leandro', 'Mamani');
persona1.saludar();
persona2.saludar();
//############################################################//

class Profesor extends Persona {
    constructor(nombre, apellido, edad, materia) {
        super(nombre, apellido, edad);
        this.materia = materia; 

    }
    presentarMateria() {
        console.log(`Buen dia, hoy veremos ${this.materia}`);
    }
     
}

const profesor1 = new Profesor('enrico', 'Palomares', '25', 'Frontend');
console.log(profesor1);
profesor1.presentarMateria();
profesor1.saludar()

