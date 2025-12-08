const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'supplier', 'mechanic'],
        default: 'user'
    },
    // Location fields
    location: {
        address: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true,
            default: 'India'
        },
        postalCode: {
            type: String,
            trim: true
        },
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    },
    phone: {
        type: String,
        trim: true
    },
    // Email verification fields
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    // Password reset fields
    passwordResetToken: String,
    passwordResetExpires: Date,
    // Legacy OTP fields (kept for backward compatibility)
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    otp: String,
    otpExpire: Date,
    otpPurpose: {
        type: String,
        enum: ['verification', 'password-reset', 'login']
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});

const User = mongoose.model('User', userSchema);

module.exports = User;
