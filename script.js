// -------------------------
// GUARDAR DATOS DESDE REGISTER
// -------------------------
document.getElementById("formRegistro")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const pass = document.getElementById("pass").value;

    // Guardar datos en localStorage
    localStorage.setItem("regNombre", nombre);
    localStorage.setItem("regCorreo", correo);
    localStorage.setItem("regPass", pass);

    alert("Registro exitoso. Ahora inicia sesión.");
    window.location.href = "login.html";
});


// -------------------------
// LOGIN VALIDANDO DATOS GUARDADOS
// -------------------------
document.getElementById("formLogin")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const correoIngresado = document.getElementById("loginCorreo").value;
    const passIngresado = document.getElementById("loginPass").value;

    // Leer datos guardados desde register
    const correoGuardado = localStorage.getItem("regCorreo");
    const passGuardado = localStorage.getItem("regPass");

    if (correoIngresado === correoGuardado && passIngresado === passGuardado) {
        alert("Inicio de sesión correcto.");
        window.location.href = "index.html"; // REDIRECCIONA A LA PÁGINA PRINCIPAL
    } else {
        alert("Datos incorrectos.");
    }
});
