// CLASE (CicloMotor) 
class CicloMotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

    arrancar() {
        this.encendida = true;

        console.log("Se mete y gira la llave, la moto arranca.");
    }

    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual < 120) {
                this.velocidadActual = this.velocidadActual + this.aceleracion;
            } else {
                console.log("No se puede acelerar, por que ya tiene la velocidad máxima.");
                this.velocidadActual = 120;
            }
        } else {
            console.log("No se puede acelerar, por que la moto está apagada.");
        }
    }

    frenar() {
        if (this.encendida) {
            if (this.velocidadActual > 0) {
                this.velocidadActual = this.velocidadActual - this.desaceleracion;
            } else {
                console.log("No se puede reducir más la velocidad.");
            }
            
        }
    }

    mostrarInfo() {
        console.log("Número de ruedas: " + this.numRuedas + ", Velocidad máxima: " + this.velocidadMaxima + ", Velocidad actual: " +this.velocidadActual + ", Marca :" + this.marca + ", Aceleración: " + this.aceleracion + ", Desaleración: " + this.desaceleracion + ", Encendida: " + this.encendida);
    }
}

let ciclomotor = new CicloMotor("Kawasaki", 70, 20, true);

console.log("LA MOTO INICIALMENTE: ");
ciclomotor.mostrarInfo();

console.log("LA MOTO TRAS ACELERAR: ");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("LA MOTO TRAS ARRANCAR Y ACELERAR: ");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
ciclomotor.frenar();
ciclomotor.mostrarInfo();


console.log("");
console.log("");
console.log("");
console.log("");

// ############################################################################################################
// ############################################################################################################
// ############################################################################################################

// CLASE (CicloMotor)
class MotoCross extends CicloMotor {
    constructor(marca, aceleracion, desaceleracion) {
        super(marca, aceleracion, desaceleracion);

        this.velocidadMaxima = 90;
        this.marchaActual = 0;
    }

    arrancar() {
        this.encendida = true;

        console.log("Se mete y gira la lalve, la moto arranca.");
        console.log("Se levanta la pata de cabra");
    }

    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual < 90) {

                this.velocidadActual = this.velocidadActual + this.aceleracion;

                if (this.velocidadActual === 0) {
                    this.marchaActual = 0;
                } else {
                    if (this.velocidadActual > 0 && this.velocidadActual <= 10) {
                        this.marchaActual = 1;
                    } else {
                        if (this.velocidadActual > 10 && this.velocidadActual <= 30) {
                            this.marchaActual = 2;
                        } else {
                            this.marchaActual = 3;
                        }
                    }
                }
            } else {
                console.log("No se puede acelerar, por que ya tiene la velocidad máxima.");
                this.velocidadActual = 120;
            }
        } else {
            console.log("No se puede acelerar, por que la moto está apagada.");
        }
    }

    frenar() {
        if (this.encendida) {
            if (this.velocidadActual > 0) {
                this.velocidadActual = this.velocidadActual + this.desaceleracion;

                if (this.velocidadActual === 0) {
                    this.marchaActual = 0;
                } else {
                    if (this.velocidadActual > 0 && this.velocidadActual <= 10) {
                        this.marchaActual = 1;
                    } else {
                        if (this.velocidadActual > 10 && this.velocidadActual <= 30) {
                            this.marchaActual = 2;
                        } else {
                            this.marchaActual = 3;
                        }
                    }
                }
            } else {
                console.log("No se puede reducir más la velocidad.");
            }
            
        }
    }

    mostrarInfo() {
        super.mostrarInfo();

        console.log("La marcha actual es: " +this.marchaActual);
        console.log("");
    }
}

let motoMotoCross = new MotoCross("Honda", 10, 5);

console.log("LA MOTO DE MOTOCROSS INICIALMENTE:");
motoMotoCross.mostrarInfo();

console.log("LA MOTO TRAS ACELERAR: ");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("LA MOTO TRAS ARRANCAR Y ACELERAR: ");
motoMotoCross.arrancar();
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
motoMotoCross.acelerar();
motoMotoCross.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
motoMotoCross.frenar();
motoMotoCross.mostrarInfo();

console.log("");
console.log("");
console.log("");
console.log("");

// ############################################################################################################
// ############################################################################################################
// ############################################################################################################

// CLASE (Scooter) 
class Scooter extends CicloMotor {
    constructor(marca) {
        super(marca);

        this.aceleracion = 25;
        this.desaceleracion = 15;
    }

    arrancar() {
        this.encendida = true;

        console.log("Se acerca la llave y se pulsa el botón, la moto arranca.");
    }
}

let scooter = new Scooter("Yamaha");

console.log("LA MOTO SCOOTER INICIALMENTE:");
scooter.mostrarInfo();

console.log("LA MOTO TRAS ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("LA MOTO TRAS ARRANCAR Y ACELERAR: ");
scooter.arrancar();
scooter.acelerar();
scooter.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
scooter.frenar();

scooter.mostrarInfo();