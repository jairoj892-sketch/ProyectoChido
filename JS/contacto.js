
const formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const tema = document.getElementById("tema").value;
        const satisfaccion = document.getElementById("satisfaccion").value;
        const mensaje = document.getElementById("mensaje").value.trim();
        const aviso = document.getElementById("mensaje-formulario");

        if (nombre.length < 3) {
            aviso.textContent = "Escribe un nombre de al menos 3 caracteres.";
            aviso.style.color = "#c62828";
            return;
        }

        if (correo === "") {
            aviso.textContent = "Escribe tu correo electrónico.";
            aviso.style.color = "#c62828";
            return;
        }

        if (tema === "" || satisfaccion === "") {
            aviso.textContent = "Selecciona una opción en cada pregunta.";
            aviso.style.color = "#c62828";
            return;
        }

        if (mensaje.length < 10) {
            aviso.textContent = "Describe tu consulta con al menos 10 caracteres.";
            aviso.style.color = "#c62828";
            return;
        }

        aviso.textContent =
            "¡Formulario completado correctamente! Gracias por responder.";
        aviso.style.color = "#237a35";

        formulario.reset();
    });
}
