<?php include 'includes/header.php';


$nombreCliente="Mario Alejandro";
// Conocer la extension de un string
echo strlen($nombreCliente);
echo "<br>";

var_dump($nombreCliente);
echo "<br>";

// Eliminar en blanco
$texto=trim($nombreCliente);
echo strlen($texto);
echo "<br>";
// Convertirlo a mayusculas
echo strtoupper($nombreCliente);
echo "<br>";
// Convertirlo a minusculas
echo strtolower($nombreCliente);
echo "<br>";

$mail1="alejandrogonzalez@uadec.edu.mx";
$mail2="Alejandrogonzalez@uadec.edu.mx";

var_dump(strtolower($mail1)===strtolower($mail2));
echo "<br>";

echo str_replace("Mario","Alec",$nombreCliente);
echo "<br>";

// Comentario para revisar
echo strpos($nombreCliente,'Alejandro');

echo "<br>";
$tipoCliente="Premium";
echo "El Cliente" . $nombreCliente . "es " . $tipoCliente;
echo "<br>";
echo "El Cliente {$nombreCliente} es  {$tipoCliente}";

include 'includes/footer.php';