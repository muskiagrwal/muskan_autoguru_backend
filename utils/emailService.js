const nodemailer = require('nodemailer');
const logger = require('./logger');

/**
 * Email Service
 * Handles sending emails using Nodemailer with support for multiple providers
 */

/**
 * Create email transporter based on environment configuration
 */
const createTransporter = () => {
    const emailService = process.env.EMAIL_SERVICE || 'smtp';

    let transportConfig;

    if (emailService === 'gmail') {
        // Gmail configuration
        transportConfig = {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || process.env.SMTP_EMAIL,
                pass: process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD
            }
        };
    } else if (emailService === 'sendgrid') {
        // SendGrid configuration
        transportConfig = {
            host: 'smtp.sendgrid.net',
            port: 587,
            auth: {
                user: 'apikey',
                pass: process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD
            }
        };
    } else {
        // Custom SMTP configuration (backward compatible)
        transportConfig = {
            host: process.env.EMAIL_HOST || process.env.SMTP_HOST,
            port: process.env.EMAIL_PORT || process.env.SMTP_PORT || 587,
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER || process.env.SMTP_EMAIL,
                pass: process.env.EMAIL_PASSWORD || process.env.SMTP_PASSWORD
            }
        };
    }

    return nodemailer.createTransporter(transportConfig);
};

/**
 * Send Email (Generic)
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} text - Plain text body
 * @param {string} html - HTML body (optional)
 */
const sendEmail = async (to, subject, text, html = null) => {
    try {
        // If no SMTP credentials, just log it (for dev/demo)
        if (!process.env.SMTP_EMAIL && !process.env.EMAIL_USER) {
            logger.warn('Email credentials not found. Email not sent (simulated).');
            logger.info(`To: ${to}`);
            logger.info(`Subject: ${subject}`);
            return true;
        }

        const transporter = createTransporter();
        const fromEmail = process.env.EMAIL_FROM || process.env.SMTP_EMAIL || process.env.EMAIL_USER;
        const fromName = process.env.EMAIL_FROM_NAME || process.env.FROM_NAME || 'AutoGuru';

        const info = await transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            to,
            subject,
            text,
            html: html || text // Fallback to text if HTML not provided
        });

        logger.success(`Email sent: ${info.messageId}`);
        return true;
    } catch (error) {
        logger.error('Error sending email:', error);
        return false;
    }
};

/**
 * Send email verification email
 * @param {string} email - Recipient email
 * @param {string} firstName - User's first name
 * @param {string} verificationToken - Verification token
 */
const sendVerificationEmail = async (email, firstName, verificationToken) => {
    try {
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        const verificationUrl = `${frontendUrl}/verify-email?token=${verificationToken}`;

        const subject = 'Verify Your AutoGuru Account';
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                    .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to AutoGuru!</h1>
                    </div>
                    <div class="content">
                        <p>Hi ${firstName},</p>
                        <p>Thank you for registering with AutoGuru! We're excited to have you on board.</p>
                        <p>To complete your registration and verify your email address, please click the button below:</p>
                        <div style="text-align: center;">
                            <a href="${verificationUrl}" class="button">Verify Email Address</a>
                        </div>
                        <p>Or copy and paste this link into your browser:</p>
                        <p style="word-break: break-all; color: #667eea;">${verificationUrl}</p>
                        <p><strong>This link will expire in 24 hours.</strong></p>
                        <p>If you didn't create an account with AutoGuru, please ignore this email.</p>
                        <p>Best regards,<br>The AutoGuru Team</p>
                    </div>
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} AutoGuru. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const text = `Hi ${firstName},\n\nThank you for registering with AutoGuru!\n\nVerify your email: ${verificationUrl}\n\nThis link expires in 24 hours.\n\nBest regards,\nThe AutoGuru Team`;

        await sendEmail(email, subject, text, html);
        logger.info(`Verification email sent to ${email}`);
        return { success: true };
    } catch (error) {
        logger.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');
    }
};

/**
 * Send password reset email
 * @param {string} email - Recipient email
 * @param {string} firstName - User's first name
 * @param {string} resetToken - Password reset token
 */
const sendPasswordResetEmail = async (email, firstName, resetToken) => {
    try {
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
        const resetUrl = `${frontendUrl}/reset-password?token=${resetToken}`;

        const subject = 'Reset Your AutoGuru Password';
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                    .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Password Reset Request</h1>
                    </div>
                    <div class="content">
                        <p>Hi ${firstName},</p>
                        <p>We received a request to reset your AutoGuru account password.</p>
                        <p>Click the button below to reset your password:</p>
                        <div style="text-align: center;">
                            <a href="${resetUrl}" class="button">Reset Password</a>
                        </div>
                        <p>Or copy and paste this link into your browser:</p>
                        <p style="word-break: break-all; color: #667eea;">${resetUrl}</p>
                        <div class="warning">
                            <strong>⚠️ Important:</strong>
                            <ul style="margin: 10px 0;">
                                <li>This link will expire in 10 minutes</li>
                                <li>For security reasons, you can only use this link once</li>
                            </ul>
                        </div>
                        <p>If you didn't request a password reset, please ignore this email or contact support if you have concerns.</p>
                        <p>Best regards,<br>The AutoGuru Team</p>
                    </div>
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} AutoGuru. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const text = `Hi ${firstName},\n\nWe received a request to reset your AutoGuru password.\n\nReset your password: ${resetUrl}\n\nThis link expires in 10 minutes.\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nThe AutoGuru Team`;

        await sendEmail(email, subject, text, html);
        logger.info(`Password reset email sent to ${email}`);
        return { success: true };
    } catch (error) {
        logger.error('Error sending password reset email:', error);
        throw new Error('Failed to send password reset email');
    }
};

/**
 * Test email configuration
 */
const testEmailConfig = async () => {
    try {
        const transporter = createTransporter();
        await transporter.verify();
        logger.success('Email configuration is valid');
        return true;
    } catch (error) {
        logger.error('Email configuration error:', error.message);
        return false;
    }
};

/**
 * Send SMS (Stub)
 * @param {string} to - Recipient phone number
 * @param {string} message - SMS message
 */
const sendSMS = async (to, message) => {
    try {
        // Placeholder for SMS service (e.g., Twilio)
        logger.info(`[SMS SIMULATION] To: ${to}, Message: ${message}`);
        return true;
    } catch (error) {
        logger.error('Error sending SMS:', error);
        return false;
    }
};

module.exports = {
    sendEmail,
    sendVerificationEmail,
    sendPasswordResetEmail,
    testEmailConfig,
    sendSMS
};
