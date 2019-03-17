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

// require in Helmet
const helmet = require('helmet');

// enstantiate the Express application
const app = express();

// defining port
const PORT = process.env.PORT || 8000;

//syncwith database
const db = require('./models');


//seting up server to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// server setup the public directory for static assets usage
app.use(express.static( './public'));


/*-------------Helmet.js --------------*/
//Helmet initialized in express middleware and will set various HTTP headers to help protect app.
app.use(helmet())

//Sets four HTTP headers top prevent loading cached versions of files: Cache-Control, Surrogate-Control, Pragma, and Expires
app.use(helmet.noCache())

//Helmet’s HSTS set the Strict-Transport-Security header.
const sixtyDaysInSeconds = 5184000;

//Forces browsers to use the https protocol for the website
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds
}))

//Hides express server's default x-powered-by header, which can be used by attackers to penetrate the server
app.disable('x-powered-by');

//Prevents clickjacking using frame or iframe.  clickjacking is a way attackers trick users into using a page by hiding the true nature of the page using a frame or iframe HTML tag.
app.use(helmet.frameguard({action: 'deny'}))

//CSP (content security policy) can help protect against malicious injection of JavaScript, CSS, plugins, and more by restricting the origin of the source of the files being executed/parsed.
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["*"],
    scriptSrc: ["'self'",'code.jquery.com/','stackpath.bootstrapcdn.com','cdnjs.cloudflare.com'],
    imgSrc:["*"],
    fontSrc: ["*"],
  }
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //this line will add a header which will enable CORS
  next();
});


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

