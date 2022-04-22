var express = require('express');
var router = express.Router();
const tareasControllers= require("../Controllers/tareasControllers")

/* GET home page. */
router.get('/', function(req,res,next){
    res.redirect("/tarea");
});

module.exports = router;
 