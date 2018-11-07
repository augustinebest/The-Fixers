const Artisan = require('../Models/Artisan')
const cloud = require('../Services/cloudinary');

exports.addArtisans = (req, res, next) => {
    const artisan = new Artisan({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        jobDescription: req.body.JobDescription,
        imageID: '',
        address: req.body.address,
        location: req.body.location,
        pictures: req.file.path,
        dateAvailable: req.body.DateAvailable,
        experienceLevel: req.body.ExperienceLevel
    });
    try {
        if(req.body.name == '' || req.body.name == null || req.body.phoneNumber == '' || req.body.phoneNumber == null || req.body.jobDescription == '' || req.body.jobDescription == null  || req.body.address == '' || req.body.address == null || req.body.location == '' || req.body.location == null || req.body.dateAvailable == '' || req.body.dateAvailable == null) {
            res.json({message: 'The field(s) are required', code: 9});
        } else {
            cloud.upload(artisan.pictures).then(result => {
                artisan.pictures = result.url;
                artisan.imageID = result.Id;
                console.log(artisan);
                Artisan.create(artisan, (err, result) => {
                    if(err) res.json({message: 'error ocurred in adding this artisan', code: 10});
                    if(result) {
                        res.json({message: 'this artisan have been created', code: 11})
                        console.log(artisan);
                    }
                })
            })
        }
    }
    catch (err) {
        res.json({err: err, message: 'Please Try Again: an error occured during registration', code: 12 })
    }
}

exports.getArtisans = (req, res, next) => {
    res.json('okay')
}