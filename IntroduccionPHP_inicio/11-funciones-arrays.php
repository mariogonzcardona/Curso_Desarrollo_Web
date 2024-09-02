<?php include 'includes/header.php';


// in_array - buscar elementos en un arreglo
$carrito=['Tablet','Computadora','Television'];

var_dump(in_array('Tablet',$carrito));
var_dump(in_array('Audifonos',$carrito));


// Ordenar elementos de un arreglo
$numeros=array(1,3,4,5,1,2);
sort($numeros);// de mayor a menor
rsort($numeros);// de menor a mayor

echo "<pre>";
var_dump($numeros);
echo "</pre>";

$cliente=[
    'saldo'=>200,'tipo' => 'premium','nombre'=>'Mario'
];

asort($cliente);//Ordena por Valores (orden alfabetico)
arsort($cliente);//Ordena por Valores (orden alfabetico, invertido)
ksort($cliente);//Ordena por llaves (orden alfabetico)
krsort($cliente);//Ordena por llaves (orden alfabetico, invertido)

echo "<pre>";
var_dump($cliente);
echo "</pre>";


include 'includes/footer.php';