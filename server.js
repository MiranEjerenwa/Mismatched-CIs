// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies ***

// requiring in .env
require('dotenv').config();

// require express and path
const express = require('express');
// requiring in the path package need for referening absolute paths used by the HTML files
const path = require('path');
const bodyParser = require('body-parser');

// enstantiate the Express application
const app = express();

// setting up the port number for Heroku and local host
const PORT = process.env.PORT || 8080;

//syncwith database
const db = require('./models');


//seting up server to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// server setup the public directory for static assets usage
app.use(express.static( './public'));

// Routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


//Syncs the db
db.sequelize.sync().then(function () {

})

app.get('/', function(req,res){
        
    res.sendFile(path.join(__dirname, "/../public/.html" ))
})

 
//Starting server on the predefined Port
app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
});





