const formularioRegistro = document.getElementById("resgitro-doctores-form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const especialidad = document.getElementById("especialidad")
const numeroConsultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")

formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        especialidad: especialidad.value,
        consultorio:numeroConsultorio.value,
        correo: correo.value
        
    }

    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formularioRegistro.reset()
    alert("Medico registrado con exito")
})