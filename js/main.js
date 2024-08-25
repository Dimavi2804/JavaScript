function calcularNuevamente () {
    let calcularNuevamente = confirm ("¿Desea reiniciar el Caluculador?")
        if (calcularNuevamente) {
            calcularHonorario ();
        } else {
            alert ("Muchas gracias");
        }
}
function calcularHonorario (){

let valorIngresado

    while (true) {
        valorIngresado = parseInt(prompt("Ingrese 1 si desea vender un vehículo o ingrese 2 si desea vender un inmueble"));

        if (valorIngresado === 1 || valorIngresado === 2) {
            break;
        } else {
            alert("Debe ingresar 1 o 2.");
        }
    }

    if (valorIngresado === 1) {
        let valorVehiculo = parseFloat(prompt("Ingrese el valor en dolares al cual desea vender el vehiculo para conocer el honorario a pagar"));
        if (isNaN(valorVehiculo)) {
            alert("Debe ingresar un monto válido");
        } else {
            let honorario = valorVehiculo * 0.05;
            alert("El honorario a pagar es U$S " + honorario);
        }
        calcularNuevamente ();
    } else if (valorIngresado === 2) {
            let valorInmueble = parseFloat(prompt("Ingrese el valor en dolares al cual desea vender el inmueble para conocer el honorario a pagar"));
            if (isNaN(valorInmueble)) {
                alert("Debe ingresar un monto válido");
            } else {
                let honorario = valorInmueble * 0.01;
                alert("El honorario a pagar es U$S " + honorario);
                calcularNuevamente ();
        }
    }
}

calcularHonorario ();