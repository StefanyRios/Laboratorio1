const formularioDoctor =document.getElementById("resgitro-doctores-form");
formularioDoctor.addEventListener("submit",(event) =>{
    event.preventDefault();
    const datosDoctor = {
        nombreMedico: document.getElementById('nombre').value,
        apellidoMedico: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        especialidad: document.getElementById('especialidad').value,
        consultorio: document.getElementById('consultorio').value,
        email: document.getElementById('email').value,
    };

})