const _ = require('lodash');

class RestfulAPI {
    constructor(resourceName, app, model){
      this.resource = resourceName;
      this.app = app;
      this.model = model;
    }
  
    findAll() {
      this.app.get(`/api/${this.resource}`, (req, res) => {
        this.model.findAll({})
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err){
          res.json(err);
        })
      })
    }
  
    create() {
      this.app.post(`/api/${this.resource}`, (req, res) => {
        //console.log(req.body);
        _.forEach(req.body.data, (item) => {
          this.model.create(item)
          .then(function(data) {
            console.log(`item inserted. config_item_id: ${item.config_item_id}`);
          })
          .catch(function(err){
            console.log(`entry failed: ${JSON.stringify(err)}`);
          })
        });
      })
    }

    find(identifier) {
      this.app.get(`/api/${this.resource}/:${identifier}`, (req, res) => {
        this.model.findAll({
          where: {
            [identifier]: req.params[identifier]
          }
        })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err){
          res.json(err);
        })
      })
    }
  
    delete(identifier) {
      this.app.delete(`/api/${this.resource}/:${identifier}`, (req, res) => {
        this.model.destroy({
          where: {
            [identifier]: req.params[identifier]
          }
        })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err){
          res.json(err);
        })
      })
    }
  
    update(identifier) {
      this.app.put(`/api/${this.resource}/:${identifier}`, (req, res) => {
        this.model.update(
          req.body,
          {
            where: {
              [identifier]: req.params[identifier]
          }
        })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err){
          res.json(err);
        })
      })
    }
  }
  
  module.exports = RestfulAPI;