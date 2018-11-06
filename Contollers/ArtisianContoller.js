const Artisian = require('../Models/Artisan');
const cloud = require('../Services/cloudinary');

exports.addArtisans = (req, res, next) => {
    console.log(req.file);
    const artisan = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        JobDescription: req.body.JobDescription,
        address: req.body.address,
        location: req.body.location,
        pictures: req.file.path,
        DateAvailable: req.body.DateAvailable,
        ExperienceLevel: req.body.ExperienceLevel
    };
    try {
        cloud.upload(artisan.pictures).then(result => {
            console.log(result);
        })
        console.log(artisan);
    }
    catch (err) {
        res.json({err: err, message: 'Please Try Again: an error occured during registration' })
    }
}

exports.getArtisans = (req, res, next) => {
    res.json('okay')
}