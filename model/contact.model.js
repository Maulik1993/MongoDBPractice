var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  Name:String,
  Email:String,
  CNumber:String,
  Message:String
});

var Contact = mongoose.model("contactCollection",ContactSchema,"contactCollection");

module.exports = Contact;
