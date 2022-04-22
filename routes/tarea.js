var express = require('express');
var router = express.Router();
const tareasControllers= require("../Controllers/tareasControllers")

/* GET home page. */
router.get('/',tareasControllers.index);
router.get('/crear',tareasControllers.crear);
router.post('/', tareasControllers.guardar);
router.post('/eliminar/:id',tareasControllers.eliminar );
router.get('/editar/:id',tareasControllers.editar );
router.post("/actualizar",tareasControllers.actualizar);




module.exports = router;