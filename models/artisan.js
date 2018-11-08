const mongoose = require('mongoose');

const artisanSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: Number,
        require: true,
    },
    jobDescription: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        match: /[a-zs0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    address: {
        type: String,
        require: true,
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
        type: String,
        require: true,
    },
    experienceLevel: {
        type: Number,
        require: true,
    },
    create_date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Artisan', artisanSchema);