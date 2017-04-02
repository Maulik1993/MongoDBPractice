var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var Contact=require('../model/contact.model.js');

router.get('/', function (req, res) {
    console.log("inside get request");

    Contact.find({})
      .exec(function(err,contacts){
        if(err){
          res.send("error has occured");
        }
        else {
          console.log(contacts);
          res.json(books);
        }
      });
});
module.exports = router;
