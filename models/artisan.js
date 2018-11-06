var mongoose = require('mongoose');

//Genre schema for the application
var artisanSchema = mongoose.Schema({
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

var Artisan = module.exports = mongoose.model('Artisan', artisanSchema);

//get Artisans
module.exports.getArtisans = (callback, limit) => {
    Artisan.find(callback).limit(limit);
};


//post Artisan
module.exports.addArtisan = (artisan, callback) => {
    Artisan.create(artisan, callback);
};

