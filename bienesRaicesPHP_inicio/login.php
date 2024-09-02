<?php 
    
    // Incluye el header
    require 'includes/app.php';
    $db=conectarDB();

    $errores=[];

    // Autenticar el usuario
    if($_SERVER['REQUEST_METHOD']==='POST'){
        
        $email=mysqli_real_escape_string($db,filter_var($_POST['email'],FILTER_VALIDATE_EMAIL));
        $password=mysqli_real_escape_string($db,$_POST['password']);
        if(!$email){
            $errores[]="El email es obligatorio o no es valido";
        }
        if(!$password){
            $errores[]="El password es obligatorio";
        }
        if(empty($errores)){
            // Revisar si el usuario existe
            $query="SELECT * FROM usuarios WHERE email='${email}';";
            // echo "<pre>";
            //     var_dump($query);
            // echo "</pre>";
            $resultado=mysqli_query($db,$query);
            // echo "<pre>";
            //     var_dump($resultado);
            // echo "</pre>";
            if($resultado->num_rows ){
                // Revisar si el password es correcto
                $usuario=mysqli_fetch_assoc($resultado);
                
                // Verificar si el password es correcto
                $auth=password_verify($password,$usuario['password']);

                echo "<pre>";
                    var_dump($auth);
                echo "</pre>";
                if($auth){
                    // El usuario esta autenticado
                    session_start();
                    
                    // Llenar el arreglo de la sesion
                    $_SESSION['email']=$usuario['email'];
                    $_SESSION['login']=true;
                    header('Location: /admin');

                    echo "<pre>";
                    var_dump($_SESSION);
                    echo "</pre>";
                }else{
                    $errores[]="El password es incorrecto";
                }
            }else{
                $errores[]="El usuario no existe";
            }
        }
    }

    incluirTemplate('header');
?>

    <main class="contenedor seccion contenido-centrado">
        <h1>Iniciar Sesion</h1>

        <?php foreach($errores as $error):?>
            <div class="alerta error">
                <?php echo $error;?>
            </div>
        <?php endforeach;?>

        <form method="POST" class="formulario">
        <fieldset>
                <legend>Email y Password</legend>

                <label for="email">E-mail</label>
                <input type="email" placeholder="Tu Email" id="email" name="email">

                <label for="password">Passwprd</label>
                <input type="password" placeholder="Tu password" id="password" name="password">

            </fieldset>
            <input type="submit" value="Iniciar Sesion" class="boton boton-verde">
        </form>
    </main>
    <?php incluirTemplate('footer');?>
</php>