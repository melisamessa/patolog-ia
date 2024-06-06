<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verificar las credenciales del usuario (aquí puedes realizar la autenticación con una base de datos u otro método)
    if ($username === "usuario" && $password === "contraseña") {
        // Credenciales válidas, redireccionar al usuario a la página patolog_ia.html
        header("Location: patolog_ia.html");
        exit();
    } else {
        // Credenciales inválidas, mostrar un mensaje de error o realizar alguna otra acción
        echo "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
}
?>
