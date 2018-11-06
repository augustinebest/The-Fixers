const mongoose = require('mongoose');

//Genre schema for the application
const artisanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    JobDescription: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true

    },
    pictures: {
        type: String,
        required: true
    },
    DateAvailable: {
        type: Date,
        required: true
    },
    ExperienceLevel: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Artisan', artisanSchema);