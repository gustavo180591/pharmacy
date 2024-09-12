<?php
// Archivo básico de manejo de login
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Validación básica para demostración. En producción, valida contra una base de datos.
    if ($username === 'admin' && $password === 'password') {
        echo 'Inicio de sesión exitoso';
        // Redirige a otra página si es necesario
        // header('Location: success.html');
    } else {
        echo 'Nombre de usuario o contraseña incorrectos';
    }
}
?>
