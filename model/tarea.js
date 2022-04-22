module.exports ={
    obtener: function (conexion,funcion) {
        conexion.query("SELECT * FROM tarea", funcion);
    },
    insertar:function (conexion,datos,funcion) {
        
        conexion.query("INSERT INTO tarea ( titulo, descripcion) VALUES (?,?)", [datos.titulo, datos.descripcion], funcion);
    },
    eliminar:function (conexion,id,funcion) {
        
        conexion.query(" DELETE FROM tarea  WHERE id=?",[id], funcion);
    },
    retornarDatos:function(conexion,id,funcion){
        conexion.query("SELECT * FROM  tarea WHERE id=?",[id],funcion);
    },
    actualizar:function (conexion,datos,funcion) {
        
        conexion.query("UPDATE tarea SET titulo=?, descripcion=? WHERE id=?", [datos.titulo, datos.descripcion, datos.id], funcion);
    }

    
}