<?php include 'includes/header.php';

$clientes=[];
$clientes2=array();
$clientes3=array('Ivon','Cristal','Cynthia');

$clientes=[
    'nombre'=>'Mario',
    'saldo'=>'200'
];
// Empty
var_dump(empty($clientes));
var_dump(empty($clientes2));
var_dump(empty($clientes3));

// Isset- Revisar si un arreglo esta creado o una propiedad esta definida
echo "<br>";
var_dump(isset($clientes));
var_dump(isset($clientes2));
var_dump(isset($clientes3));
var_dump(isset($clientes4));

// Isset- Permite revisar si un arreglo esta creado o una propiedad esta definida
var_dump(isset($clientes['nombre']));
var_dump(isset($clientes['codigo']));


include 'includes/footer.php';