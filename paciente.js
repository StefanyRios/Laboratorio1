function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const TablaPacientes = document.getElementById("TablaPacientes")
    const cuerpoTabla = TablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePacientes = fila.insertCell()
        celdaNombrePacientes.textContent= paciente.nombre
        const celdaApellidoPacientes = fila.insertCell();
        celdaApellidoPacientes.textContent=paciente.apellido
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=paciente.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
        
    });
}

mostrarPacientes()