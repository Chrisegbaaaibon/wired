const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bear = new  Schema ({
   email :  String
});

module.exports = mongoose.model("bear", bear);