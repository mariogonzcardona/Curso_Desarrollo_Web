<?php 

    // Incluye el header
    require 'includes/app.php';
    $db = conectarDB();
    // Crear un email y un password
    $email='mariogonzcardona@outlook.com';
    $password='123456789';
    $passwordHash=password_hash($password,PASSWORD_BCRYPT);
    // var_dump($passwordHash);
    // consultar
    $query = "INSERT INTO usuarios (email,password) VALUES('${email}','${passwordHash}');";
    echo $query;
    // var_dump(md5($password));

    // obtener resultado
    $resultado=mysqli_query($db, $query);
    var_dump($resultado);
?>