const { authenticateToken } = require('./auth');

/**
 * Middleware to require email verification
 * Add this to routes that should only be accessible to verified users
 */
const requireEmailVerification = async (req, res, next) => {
    try {
        const User = require('../models/User');
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (!user.isEmailVerified) {
            return res.status(403).json({
                success: false,
                message: 'Please verify your email address to access this feature',
                requiresEmailVerification: true
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error checking email verification status'
        });
    }
};

module.exports = {
    requireEmailVerification
};
