const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true // Allow null/undefined to be non-unique if not provided initially
    },
    educationLevel: {
        type: String,
        default: ''
    },
    interests: {
        type: [String], // e.g., ['B.Tech', 'Coding', 'Robotics']
        default: []
    },
    otpSecret: {
        type: String // In a real app, store hashed OTP or secret
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
