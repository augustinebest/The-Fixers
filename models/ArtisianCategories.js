const mongoose = require('mongoose');

const artContCategories = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ArtisanCategoties', artContCategories);