var User = require('../models/user');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var lod = require ('lodash');


// GET /users
// Get a list of users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({
        error: "Error listing users: " + err
      });
    }

    res.json(users);
  });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: "Error reading user: " + err
      });
    }
    if (!user) {
      return res.status(404).end();
    }
    res.json(user);
  });
});

// POST /users/
// Create a user 
router.post('/', bodyParser(), function(req, res){
  User.create(req.body, function(err, user){
    if(err) { 
      return res.status(500).json({
        error: "Error creating user: " + err
      });
    }
    return res.status(201).json(user);
  });
});

// DELETE /users/:id
// Delete a user by id
router.delete('/:id', function(req, res){
  User.findById(req.params.id, function (err, user){
    if(err) { 
      return res.status(404).json({
        error: "Error deleting user: " + err
      });
    }
    if(!user) { 
      return res.status(404).send('Not Found'); 
    }
    user.remove(function(err){
      if(err) { 
        return res.status(404).json({
        error: "Error deleting user: " + err
        });
      }
      return res.status(204).send('No Content');
    });
  });
});

// PUT /users/:id
// Update a user by id 
// key:{key:value} not updating/ multidimensional arrays not updating
router.put('/:id', bodyParser.json(), function(req, res){
  User.update(req.body, function(err, user){
    User.findById(req.params.id, function(err, user){
      if (err){
        return res.status(404).json({
        error: "Error updating user: " + err
      });
      }
      if (!user){
        return res.status(404).send('User not Found');
      }
      var updated = lod.merge(user, req.body);
      updated.save(function(err){
        if (err){
          return res.status(404).json({
          error: "Error updating user: " + err
          });
        }
      return res.status(200).json(user);
      });
    });
  });
});





module.exports = router;
