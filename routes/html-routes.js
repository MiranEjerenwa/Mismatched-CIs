const path = require('path');

module.exports = function (app) {
    //HTML get requests
    app.get('/', function (req, res) {
        console.log("in home route")
        
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });
    app.get('/dashboard', function(req,res){
        console.log("In dash board")
        res.sendFile(path.join(__dirname, "/../public/dashboard.html" ))
    });

    app.get('/user', function(req,res){ 
        res.sendFile(path.join(__dirname, "/../public/user.html" ))
    })
  
    // If no matching route is found default to index
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

};