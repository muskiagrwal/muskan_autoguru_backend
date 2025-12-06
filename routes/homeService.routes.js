const express = require('express');
const router = express.Router();
const homeServiceController = require('../controllers/homeService.controller');
const { validate } = require('../middleware/validator');
const { homeServiceSchema } = require('../middleware/validationSchemas');
const { authenticateToken } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/checkRole');

/**
 * Home Service Routes
 * Base path: /api/home-service
 */

// Public routes
router.post('/', homeServiceSchema, validate, homeServiceController.createHomeService);

// Admin routes (protected)
router.get('/', authenticateToken, requireAdmin, homeServiceController.getAllHomeServices);
router.get('/:id', authenticateToken, requireAdmin, homeServiceController.getHomeServiceById);
router.put('/:id', authenticateToken, requireAdmin, homeServiceController.updateHomeService);
router.delete('/:id', authenticateToken, requireAdmin, homeServiceController.deleteHomeService);

module.exports = router;
