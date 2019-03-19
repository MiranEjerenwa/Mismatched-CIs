const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

// Setting up variable to make http requests
let request;

describe('GET /api/user', function () {
  // Before each test begins, create a new request server for testing
  // & delete all users from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all users', function (done) {
    // Add some users to the db to test with
    db.User.bulkCreate([
      { id: 1, fname: 'Michelle', lname: 'Brewington', email: 'michelle.brewington@company.com', password: 'michelle', department: 'Digital Risk Staff', Role:'manager' },
      { id: 2, fname: 'Steve', lname: 'Miotti', email: 'michelle.brewington@company.com', password: 'steve', department: 'Digital Operations', Role:'user' },
      { id: 3, fname: 'Mirian', lname: 'Ejerenwa', email: 'mirian.ejerenwa@company.com', password: 'mirian', department: 'Digital Technology', Role:'manager' },
      { id: 4, fname: 'Peter', lname: 'Abogi', email: 'peter.abogi@company.com', password: 'peter', department: 'Digital Operations', Role:'user' }


    ]).then(function () {
      // Request the route that returns all examples
      request.get('/api/user').end(function (err, res) {
        let responseStatus = res.status;
        let responseBody = res.body;
        // console.log(responseBody);
        // Run assertions on the response
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody).to.not.be.null;

        expect(responseBody)
          .to.be.an('Array') // changed from array to object
          .that.has.lengthOf(4);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ id: 1, fname: 'Michelle', lname: 'Brewington', email: 'michelle.brewington@company.com', password: 'michelle', department: 'Digital Risk Staff', Role:'manager' });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes( { id: 2, fname: 'Steve', lname: 'Miotti', email: 'michelle.brewington@company.com', password: 'steve', department: 'Digital Operations', Role:'user' });

        for (let i = 0; i < responseBody.length; i++) {
          expect(responseBody[i])
          .to.be.an('object')
          .that.does.not.includes({ id: 8, fname: 'Joe', lname: 'Connor', email: 'joe.connor@company.com', password: 'joe', department: 'Digital Operations', Role:'user' });
        }  
       
        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});




// describe('POST /api/user', function () {
//   beforeEach(function () {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it('should save a new user', function (done) {
//     var reqBody = {
//       product_name: "Couch",
//       department_name: "Furniture",
//       price: 1899.00,
//       stock_quantity : 16,
//       product_sales: 0.00
//     };
//     console.log(reqBody);

//     // POST the request body to the server
//     request
//       .post('/api/products')
//       .send(reqBody)
//       .end(function (err, res) {
//         var responseStatus = res.status;
//         var responseBody = res.body;
//         console.log(`Response Status: ${responseStatus}`);
        
//         // Run assertions on the response
//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseStatus).to.not.equal(400);

//         expect(responseBody).to.not.be.null;
        
//         expect(responseBody)
//           .to.be.an('object')
//           .that.includes(reqBody);

//         expect(responseBody).to.be.instanceof(Object);

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//   });
// });