//require models library
const RestfulAPI = require('./RestClass');
const models = require('../models');

var jwt = require('jsonwebtoken');
var userVerification = require('../controller/auth');
var config = require('../config/index');
var body = require('express-validator/check').body;
const db = require('../models');
//restAPI
module.exports = function (app) {

  const mismatched_ci = new RestfulAPI('Mismatched_CI', app, models.Cidata);
  mismatched_ci.findAll();
  mismatched_ci.find('id');
  mismatched_ci.create();
  mismatched_ci.delete('id');
  mismatched_ci.update('id');

  // API for login

app.post('/api/login', function(req,res) {
  if(userVerification(req.body.username,req.body.password)){
    var token = jwt.sign({ id: req.body.username}, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    currentUser = req.body.username;
    console.log(`The token is ${token}`);
    res.cookie('token',token).json({auth:true,redirect:'dashboard'});
    
  }else{
    res.status(401).send("You are not authorized");
  }

});

      // POST route for saving a new user
  // app.post('/api/user', function(req, res) {
  //   db.user.create(req.body).then(function(dbuser) {
  //     res.json(dbuser);
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });

  // // GET route for seeing all users
  // app.get('/api/user', function(req, res) {
  //   db.user.create(req.body).then(function(dbuser) {
  //     res.json(dbuser);
  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });
  
// // Popping in the middle ware
// app.use(function(req, res, next){
//   //Add an express-validator check to ensure the field isn't empty and it contains a valid JWT
//   var token = req.headers.authorization;
//   if(token){
//     jwt.verify(token, config.secret, function(err, decoded) {
//       if(err || (decoded.id != currentUser)){
//         res.status(403).json({
//           auth: false,
//           message:"Incorrect or missing token"
//         });
//       }else{
//         next();
//       }    
//     });
//   }else
//   res.status(403).json({
//     auth: false,
//     message:"Incorrect or missing token"
//   });  
// });


}