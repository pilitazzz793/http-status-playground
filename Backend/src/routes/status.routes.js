const express = require('express');
const router = express.Router();
const statusController = require('../controllers/status.controller');

//ruta para obtener todos los status codes

router.get('/', statusController.getAllStatus);
router.get('/', get.statusController.getStatusById);
router.post('/', statusController.createStatus);
router.delete('/', statusController.deleteStatus);

module.exports = router;