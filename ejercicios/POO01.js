//ejercicio cuenta bancaria

class Cuenta {
    constructor(titular = 'alex', saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;

    }

    ingresar(cantidad) {
        this.saldo += cantidad;

    }

    extraer(cantidad) {
        this.saldo -= cantidad;
    }

    informar() {
        console.log('==========Detalle de la cuenta==========')
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: ${this.saldo}`);
        console.log('=========================================')
    }
}


const cuenta1 = new Cuenta('Oscar')
cuenta1.informar()
cuenta1.ingresar(1000)
cuenta1.informar()
cuenta1.extraer(500)
cuenta1.informar()