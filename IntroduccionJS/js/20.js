// Metodos de Propiedad
const reproductor = {
    repreducir: function(id) {
        console.log(`Reproduciendo Cancion con id: ${id}`);
    },
    pausar: function(id) {
        console.log(`Pausando Cancion con id: ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la PlayList: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la PlayList: ${nombre}`);
    }
}

reproductor.borrar = function(id) {
    console.log(`Eliminando la cancion con el id: ${id}`);
}
reproductor.repreducir(3840)
reproductor.pausar(3840)
reproductor.borrar(20)
reproductor.crearPlaylist("Tesla")
reproductor.reproducirPlaylist("Tesla")