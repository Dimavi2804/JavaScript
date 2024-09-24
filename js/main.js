let ventasGuardadas = JSON.parse(localStorage.getItem("ventas")) || [];

const tarifas = {
    inmueble: 0.01,
    vehiculo: 0.05
};

function calcularHonorarios(precio, tipo) {
    return precio * tarifas[tipo];
};

function manejarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let telefono = document.querySelector("#telefono").value;
    let email = document.querySelector("#email").value;
    let tipo = document.querySelector("#tipo").value;
    let precio = parseFloat(document.querySelector("#precio").value);

    let honorarios = calcularHonorarios(precio, tipo);
    
    const infoVenta = {
        nombre,
        telefono,
        email,
        tipo,
        precio,
        honorarios
    };

    ventasGuardadas.push(infoVenta);
    
    localStorage.setItem("ventas", JSON.stringify(ventasGuardadas));

    const resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>Honorarios para la venta de un ${tipo}: U$S ${honorarios.toFixed(2)}</p>
    `;

    document.querySelector("#honorariosForm").reset();
}

function mostrarDatosGuardados() {
    let datosGuardadosDiv = document.querySelector("#datosGuardados");
    let ventasGuardadas = JSON.parse(localStorage.getItem("ventas")) || [];

    if (ventasGuardadas.length > 0) {
        datosGuardadosDiv.innerHTML = '<h3>Datos Guardados:</h3>';
        ventasGuardadas.forEach(venta => {
            datosGuardadosDiv.innerHTML += `
                <p>Nombre: ${venta.nombre}</p>
                <p>Teléfono: ${venta.telefono}</p>
                <p>Email: ${venta.email}</p>
                <p>Tipo: ${venta.tipo}</p>
                <p>Precio: U$S ${venta.precio.toFixed(2)}</p>
                <p>Honorarios: U$S ${venta.honorarios.toFixed(2)}</p>
                <hr>
            `;
        });
    } else {
        datosGuardadosDiv.innerHTML = `<p>No hay datos guardados.</p>`;
    }
}

document.querySelector("#honorariosForm").addEventListener("submit", manejarFormulario);

document.querySelector("#mostrarDatos").addEventListener("click", mostrarDatosGuardados);