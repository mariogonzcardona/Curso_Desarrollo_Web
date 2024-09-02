<?php include 'includes/header.php';

$carrito=['Tablet','Television','Computadora'];

echo "<pre>";
var_dump($carrito);
echo "</pre>";

// Acceder a un elemento del array
echo $carrito[1];

$carrito[3]="Mouse";

// Añade un elemento nuevo al arreglo
array_push($carrito,"Audifonos");

// Añadir un elemento al inicio
array_unshift($carrito,"Logitech");

echo "<pre>";
var_dump($carrito);
echo "</pre>";

include 'includes/footer.php';