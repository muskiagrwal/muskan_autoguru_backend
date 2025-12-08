const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { validate, sanitizeFields } = require('../middleware/validator');
const { contactSchema } = require('../middleware/validationSchemas');
const { authenticateToken } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/checkRole');

// Public routes
router.post('/', contactSchema, validate, contactController.submitContact);

// Admin routes (protected)
router.get('/', authenticateToken, requireAdmin, contactController.getAllContacts);
router.get('/:id', authenticateToken, requireAdmin, contactController.getContactById);
router.put('/:id', authenticateToken, requireAdmin, contactController.updateContact);
router.delete('/:id', authenticateToken, requireAdmin, contactController.deleteContact);

module.exports = router;
