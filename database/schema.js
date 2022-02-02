const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bear = new  Schema ({
   email :  [String, "This isn't an email!!"]
});

module.exports = mongoose.model("bear", bear);