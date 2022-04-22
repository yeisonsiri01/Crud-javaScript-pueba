var mysql= require("mysql");
var conexion= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pruebat'
});

conexion.connect(
    (err)=>{
        if (!err) {
            console.log('Conexion establecida');
            
        }else{
            console.log('Error de conexion');
        }
    }

);
module.exports=conexion;