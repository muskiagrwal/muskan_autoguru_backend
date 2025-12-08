const crypto = require('crypto');

/**
 * Generate a secure random token
 * @param {number} length - Length of the token in bytes (default: 32)
 * @returns {string} - Hex string token
 */
const generateToken = (length = 32) => {
    return crypto.randomBytes(length).toString('hex');
};

/**
 * Hash a token for secure storage
 * @param {string} token - Token to hash
 * @returns {string} - Hashed token
 */
const hashToken = (token) => {
    return crypto.createHash('sha256').update(token).digest('hex');
};

/**
 * Generate verification token with expiration
 * @param {number} expiresInMinutes - Token expiration time in minutes (default: 24 hours)
 * @returns {Object} - Object containing token and hashed token
 */
const generateVerificationToken = (expiresInMinutes = 1440) => {
    const token = generateToken();
    const hashedToken = hashToken(token);
    const expires = new Date(Date.now() + expiresInMinutes * 60 * 1000);

    return {
        token,
        hashedToken,
        expires
    };
};

/**
 * Generate password reset token with expiration
 * @param {number} expiresInMinutes - Token expiration time in minutes (default: 10 minutes)
 * @returns {Object} - Object containing token and hashed token
 */
const generatePasswordResetToken = (expiresInMinutes = 10) => {
    const token = generateToken();
    const hashedToken = hashToken(token);
    const expires = new Date(Date.now() + expiresInMinutes * 60 * 1000);

    return {
        token,
        hashedToken,
        expires
    };
};

module.exports = {
    generateToken,
    hashToken,
    generateVerificationToken,
    generatePasswordResetToken
};
