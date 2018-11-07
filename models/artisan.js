const mongoose = require('mongoose');

//Genre schema for the application
const artisanSchema = mongoose.Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    jobDescription: {
        type: String
    },
    address: {
        type: String
    },
    location: {
        type: String
    },
    imageID: {
        type: String
    },
    pictures: {
        type: String
    },
    dateAvailable: {
        type: String
    },
    experienceLevel: {
        type: Number
    },
    create_date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Artisan', artisanSchema);