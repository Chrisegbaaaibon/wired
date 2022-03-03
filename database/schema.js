const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp')



const bear = new  Schema ({
   email : {
      type: String,
      required: true,
      unique: true
   },
},
{
      timestamps: true
   }
   );

module.exports = mongoose.model("bear", bear);