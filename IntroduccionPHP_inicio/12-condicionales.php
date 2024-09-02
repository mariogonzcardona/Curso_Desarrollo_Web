<?php include 'includes/header.php';


$autenticado=true;

$admin=true;

if($autenticado && $admin){
    echo "Usuario autenticado correctamente";
}
else{
    echo "Usuario no autenticado, inicia sesion";
}
echo "<br>";
// If anidados
$cliente=[
    'nombre'=>'Mario',
    'saldo'=>200,
    'informacion'=>[
        'tipo' => 'premium',
        'disponible'=>100
    ]
];

if(!empty($cliente)){
    echo "El arreglo de cliente no esta vacio";
    echo "<br>";
    if($cliente['saldo']>0){
        echo "El saldo del cliente esta dosponible";
    }
    else{
        echo "No hay saldo";
    }
}

include 'includes/footer.php';