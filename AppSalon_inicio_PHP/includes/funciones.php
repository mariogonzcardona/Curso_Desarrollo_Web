<?php
function obtenerServicios():array{
    try {
        // Importar una conexion
        require 'database.php';
        
        // Escribir el codigo sql
        $sql='SELECT * FROM servicios';
        $consulta=mysqli_query($db,$sql);
        
        // arreglo vacio
        $servicios = [];
        $i = 0;

        
        // Obtener los resultados
        while ($row = mysqli_fetch_assoc($consulta)) {
            $servicios[$i]['id'] = $row['id'];
            $servicios[$i]['nombre'] = $row['nombre'];
            $servicios[$i]['precio'] = $row['precio'];
            
            $i++;
        }
        return $servicios;

    } catch (\Throwable $th) {
        var_dump($th);
    }
}

obtenerServicios();