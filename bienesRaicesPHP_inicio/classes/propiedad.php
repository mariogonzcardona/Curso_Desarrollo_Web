<?php

namespace App;

class Propiedad{

    // Base de Datos
    protected static $db;
    protected static $columnasDB=['id','titulo','precio','imagen','descripcion','habitaciones','wc','estacionamiento','creado','vendedorId'];

    // Errores
    protected static $errores = [];

    public $id;
    public $titulo;
    public $precio;
    public $imagen;
    public $descripcion;
    public $habitaciones;
    public $wc;
    public $estacionamiento;
    public $creado;
    public $vendedorId;


    public function __construct($args=[])
    {
        $this->id=$args['id']?? '';
        $this->titulo=$args['titulo']?? '';
        $this->precio=$args['precio']?? '';
        $this->imagen=$args['imagen']?? '';
        $this->descripcion=$args['descripcion']?? '';
        $this->habitaciones=$args['habitaciones']?? '';
        $this->wc=$args['wc']?? '';
        $this->estacionamiento=$args['estacionamiento']?? '';
        $this->creado=date('Y/m/d');
        $this->vendedorId=$args['vendedorId']?? '';
    }

    // Definir la conexion a la BD
    public static function setDB($database){
        self::$db=$database;
    }

    public function guardar(){

        // Sanitizar los datos
        $atributos=$this->sanitizarAtributos();

        // Insertar en la base de datos
        $query = " INSERT INTO propiedades (";
        $query .= join(', ',array_keys($atributos));
        $query .= " ) VALUES (' "; 
        $query .= join("', '",array_values($atributos));
        $query .= " ');";
        
        $resultado=self::$db->query($query);
        return $resultado;
    }

    // Identificar y unir los atributos de BD
    public function atributos(){
        $atributos=[];
        foreach(self::$columnasDB as $columna){
            if($columna==='id') continue;
            $atributos[$columna]=$this->$columna;
        }
        return $atributos;
    }

    // Subida de archivos
    public function setImagen($imagen){
        if($imagen){
            $this->imagen=$imagen;
        }
    }

    public function sanitizarAtributos(){
        $atributos=$this->atributos();
        $sanitizado=[];
        foreach($atributos as $key => $value){
            $sanitizado[$key]=self::$db->escape_string($value);
        }
        return $sanitizado;
    }
    
    // Validacion
    public static function getErrores(){
        return self::$errores;
    }

    public function validar(){
        // Ejecutar el código después de que el usuario envia el formulario

        if(!$this->titulo) {
            self::$errores[] = "Debes añadir un titulo";
        }

        if(!$this->precio) {
            self::$errores[] = 'El Precio es Obligatorio';
        }

        if( strlen( $this->descripcion ) < 50 ) {
            self::$errores[] = 'La descripción es obligatoria y debe tener al menos 50 caracteres';
        }

        if(!$this->habitaciones) {
            self::$errores[] = 'El Número de habitaciones es obligatorio';
        }
        
        if(!$this->wc) {
            self::$errores[] = 'El Número de Baños es obligatorio';
        }

        if(!$this->estacionamiento) {
            self::$errores[] = 'El Número de lugares de Estacionamiento es obligatorio';
        }
        
        if(!$this->vendedorId) {
            self::$errores[] = 'Elige un vendedor';
        }

        if(!$this->imagen) {
            self::$errores[] = 'La Imagen es Obligatoria';
        }
    }

    // Lista todas las propiedades
    public static function all(){    
        return self::consultarSQL("SELECT * FROM propiedades");
    }

    public static function consultarSQL($query){
        // Consultar la base de datos
        $resultado=self::$db->query($query);

        // Iterar los resultados
        $array=[];
        while($registro=$resultado->fetch_assoc()){
            $array[]=self::crearObjeto($registro);
        }

        // Liberar la memorio
        $resultado->free();

        // Returnar los resultados
        return $array;
    }

    protected static function crearObjeto($registro){
        $objeto=new Self;
        foreach($registro as $key=>$value){
            if(property_exists($objeto,$key)){
                $objeto->$key=$value;
            }
        }
        return $objeto;
    }

}