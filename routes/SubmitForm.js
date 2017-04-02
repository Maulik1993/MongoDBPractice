var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');
var Contact=require('../model/contact.model.js');

router.post('/',function(request, respond) {
  var newContact = new Contact();
console.log(request.body.Name);
    newContact.Name=request.body.Name;
    newContact.Email=request.body.Email;
    newContact.CNumber=request.body.CNumber;
    newContact.Message=request.body.Message;

    newContact.save(function(err,listcontact){
        if(err){
          respond.send("error saving contact");
        }else{
          console.log(listcontact);
           respond.redirect( "/" );
        }
      })
   //respond.redirect( "/" );
});



module.exports = router;
