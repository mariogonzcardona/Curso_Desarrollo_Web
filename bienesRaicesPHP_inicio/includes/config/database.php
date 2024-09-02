<?php 
function conectarDB():mysqli{
    $db =new mysqli('localhost','root','toor','bienes_raices');
    $db->set_charset('utf8');
    if(!$db){
        echo "Conexión fallida intenta nuevamente...";
        exit;
    }
    // else{
    //     echo "Conexión fallida intenta nuevamente...";
    // }
    return $db;
}