const express = require('express');
const router = express.Router();
const carDataController = require('../controllers/carData.controller');

router.get('/makes', carDataController.getMakes);
router.get('/models/:make', carDataController.getModels);

module.exports = router;
