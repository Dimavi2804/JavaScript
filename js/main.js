function calcularNuevamente () {
    let calcularNuevamente = confirm ("¿Desea reiniciar el Caluculador?")
        if (calcularNuevamente) {
            calcularHonorario ();
        } else {
            alert ("Muchas gracias por usar el calculador.");
        }
}
function calcularHonorario (){

let valorIngresado

    while (true) {
        valorIngresado = parseInt(prompt("Ingrese las siguientes opciones para usar el calculador: \n1 - si desea vender un vehículo\n2 - si desea vender un inmueble\n3 - salir."));

        if (valorIngresado === 1 || valorIngresado === 2 || valorIngresado === 3) {
            break;
        } else {
            alert("Debe ingresar 1, 2 o 3.");
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
            }
                calcularNuevamente ();
    } else if (valorIngresado === 3) {
        alert("Gracias por usar el calcuador.");
    }
}

calcularHonorario ();