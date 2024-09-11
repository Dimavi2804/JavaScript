let tramites = [];

let estadisticas = {
    totalTramites: 0,
    totalValor: 0,
    totalHonorarios: 0,
    tramitesVehiculos: 0,
    tramitesInmuebles: 0
};

function actualizarEstadisticas(tipo, valor, honorario) {
    estadisticas.totalTramites++;
    estadisticas.totalValor += valor;
    estadisticas.totalHonorarios += honorario;
    if (tipo === "vehiculo") {
        estadisticas.tramitesVehiculos++;
    } else if (tipo === "inmueble") {
        estadisticas.tramitesInmuebles++;
    }
}

function calcularNuevamente() {
    let reiniciar = confirm("¿Desea reiniciar el calculador?");
    if (reiniciar) {
        calcularHonorario();
    } else {
        alert("Muchas gracias por usar el calculador.");
        console.log("Estadísticas:");
        console.log("Total de trámites:", estadisticas.totalTramites);
        console.log("Valor total:", estadisticas.totalValor);
        console.log("Total de honorarios cobrados: U$S", estadisticas.totalHonorarios);
        console.log("Trámites de vehículos:", estadisticas.tramitesVehiculos);
        console.log("Trámites de inmuebles:", estadisticas.tramitesInmuebles);
        console.log("Detalles de trámites:", tramites);

        TotalHonorariosPorTipo ("vehiculo");
        TotalHonorariosPorTipo ("inmueble");
    }
}

function calcularHonorario() {
    let valorIngresado;
    let seguir = true;

    while (seguir === true) {
        valorIngresado = parseInt(prompt("Ingrese las siguientes opciones para usar el calculador: \n1 - si desea vender un vehículo\n2 - si desea vender un inmueble\n3 - salir."));

        if (valorIngresado === 1 || valorIngresado === 2 || valorIngresado === 3) {
            break;
        } else {
            alert("Debe ingresar 1, 2 o 3.");
        }
    }

    if (valorIngresado === 1) {
        let valorVehiculo = parseFloat(prompt("Ingrese el valor en dólares al cual desea vender el vehículo para conocer el honorario a pagar"));
        if (isNaN(valorVehiculo)) {
            alert("Debe ingresar un monto válido");
        } else {
            let honorario = valorVehiculo * 0.05;
            alert("El honorario a pagar es U$S " + honorario);
            
            tramites.push({ tipo: "vehiculo", valor: valorVehiculo, honorario: honorario });
            actualizarEstadisticas("vehiculo", valorVehiculo, honorario);
        }
        calcularNuevamente();
    } else if (valorIngresado === 2) {
        let valorInmueble = parseFloat(prompt("Ingrese el valor en dólares al cual desea vender el inmueble para conocer el honorario a pagar"));
        if (isNaN(valorInmueble)) {
            alert("Debe ingresar un monto válido");
        } else {
            let honorario = valorInmueble * 0.01;
            alert("El honorario a pagar es U$S " + honorario);
            
            tramites.push({ tipo: "inmueble", valor: valorInmueble, honorario: honorario });
            actualizarEstadisticas("inmueble", valorInmueble, honorario);
        }
        calcularNuevamente();
    } else if (valorIngresado === 3) {
        alert("Muchas gracias por usar el calculador.");
        console.log("Estadísticas:");
        console.log("Total de trámites:", estadisticas.totalTramites);
        console.log("Valor total:", estadisticas.totalValor);
        console.log("Total de honorarios cobrados: U$S", estadisticas.totalHonorarios);
        console.log("Trámites de vehículos:", estadisticas.tramitesVehiculos);
        console.log("Trámites de inmuebles:", estadisticas.tramitesInmuebles);
        console.log("Detalles de trámites:", tramites);

        TotalHonorariosPorTipo ("vehiculo");
        TotalHonorariosPorTipo ("inmueble");
    }
}

calcularHonorario();

function TotalHonorariosPorTipo(tipo) {
    const totalHonorarios = tramites
        .filter(tramite => tramite.tipo === tipo)
        .reduce((total, tramite) => total + tramite.honorario, 0);
    console.log(`Total de honorarios por venta de ${tipo}: U$S ${totalHonorarios}`);
}
