var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;
var morgan = require('morgan');

//cors {Cross Origin Request}
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,DELETE,PATCH,POST,GET');
        return res.status(200).json({});;
    }
    next();
});


//middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));

Artisan = require('./models/artisan')


//connecting to mongoose
mongoose.connect('mongodb://localhost:27017/Artisan', { useNewUrlParser: true })
var db = mongoose.connection;


//route for homepage
app.get('/', (req, res) => {
    res.send(' Use the /api/artisan endpoint');
});


// add artisan
app.post('/api/addArtisan', function (req, res) {
    try {
        var artisan = req.body;
        Artisan.addArtisan(artisan, (artisan) => {
            res.json({ artisan, message: 'Successfully Registered' });
        });
    }
    catch (err) {
        console.log(err);
        res.json({ Err: err, message: 'Please Try Again: an error occured during registration' })
    }
});

//get all artisans
app.get('/api/getArtisans', function (req, res) {
    try {
        Artisan.getArtisans((err, artisans) => {
            res.json(artisans);
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.listen(port, function () {
    console.log('Server listening at ' + port);
})