var User = require('../models/user');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')


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
  User.create(req.body, function(err, user) {
    if(err) { 
      return handleError(res, err); 
    }
    return res.status(201).json(user);
    console.log(req.body);
  });
});

// DELETE /users/:id
// Delete a user by id
router.delete('/:id', function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) { 
      return handleError(res, err); 
    }
    if(!user) { 
      return res.status(404).send('Not Found'); 
    }
    user.remove(function(err) {
      if(err) { 
        return handleError(res, err); 
      }
      return res.status(204).send('No Content');
    });
  });
});



module.exports = router;
