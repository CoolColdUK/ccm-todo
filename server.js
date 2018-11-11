const express = require('express');
const hbs = require('hbs');

const expressHelper = require('./expressHelper');
const expressMiddleware = require('./expressMiddleware');

var app = express();
var port = process.env.port || 3000;

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');


//helper
expressHelper.getCurrentYear(hbs);

//middleware
expressMiddleware.maintenancePage(app);

//route
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'home'
    });
});

//start
app.listen(port);