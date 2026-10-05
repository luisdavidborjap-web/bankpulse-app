// Rutas de BANKPULSE: cada ruta delega en un Controlador (MVC).
const router = require('express').Router();
const SaludController = require('../controllers/SaludController');

router.get('/health', SaludController.estado);

module.exports = router;
