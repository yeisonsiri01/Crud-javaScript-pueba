var conexion = require ('../Config/conexion');
var tarea = require ('../model/tarea');
var borrar= require("fs");


module.exports={
    index:function (req, res){
        tarea.obtener(conexion, function(err, datos){
        res.render('tareas/index', {title: 'Crud Tarea', tarea:datos });

        });
    }, 
    crear:function (req,res) {
        res.render('tareas/crear');
    },
    guardar:function (req,res){
        tarea.insertar(conexion,req.body, function(err){
            res.redirect('/tarea');
        });
    },
    eliminar:function(req,res){
        tarea.eliminar (conexion, req.params.id, function(err){
                res.redirect('/tarea');
        });
    },
    editar:function(req,res){

        tarea.retornarDatos(conexion,req.params.id,function(err,registros){
            res.render('tareas/editar', {tarea:registros[0]});
        });
    },
    actualizar:function (req,res){
        
        console.log(req);
        if(req.body.titulo) {
            console.log('dentro');
            tarea.actualizar(conexion, req.body, function (err){
            });

        }
        res.redirect('/tarea');
    }
}