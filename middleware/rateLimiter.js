const rateLimit = require('express-rate-limit');
const logger = require('../utils/logger');

/**
 * Rate Limiting Middleware
 * Protects API endpoints from abuse and brute force attacks
 */

/**
 * General API Rate Limiter
 * Applied to all API routes
 */
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res) => {
        logger.warn(`Rate limit exceeded for IP: ${req.ip} on ${req.path}`);
        res.status(429).json({
            success: false,
            message: 'Too many requests from this IP, please try again after 15 minutes.',
            retryAfter: '15 minutes'
        });
    }
});

/**
 * Authentication Rate Limiter
 * Applied to login, signup, and admin signup endpoints
 * Stricter to prevent brute force attacks
 */
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        success: false,
        message: 'Too many authentication attempts, please try again later.'
    },
    skipSuccessfulRequests: true, // Don't count successful requests
    handler: (req, res) => {
        logger.warn(`Auth rate limit exceeded for IP: ${req.ip} on ${req.path}`);
        res.status(429).json({
            success: false,
            message: 'Too many authentication attempts from this IP. Please try again after 15 minutes.',
            retryAfter: '15 minutes'
        });
    }
});

/**
 * Password Reset Rate Limiter
 * Applied to forgot password and reset password endpoints
 * Very strict to prevent abuse
 */
const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per windowMs
    message: {
        success: false,
        message: 'Too many password reset attempts, please try again later.'
    },
    handler: (req, res) => {
        logger.warn(`Password reset rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            message: 'Too many password reset attempts from this IP. Please try again after 15 minutes.',
            retryAfter: '15 minutes'
        });
    }
});

/**
 * Email Verification Rate Limiter
 * Applied to resend verification email endpoint
 */
const emailVerificationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per windowMs
    handler: (req, res) => {
        logger.warn(`Email verification rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            message: 'Too many verification email requests. Please try again after 15 minutes.',
            retryAfter: '15 minutes'
        });
    }
});

module.exports = {
    generalLimiter,
    authLimiter,
    passwordResetLimiter,
    emailVerificationLimiter
};
