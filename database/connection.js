const mongoose = require("mongoose");
// require('dotenv').config()

// mongoose.connect(MONGO_URI)

exports.db = async () => {
  try {
   mongoose.connect(process.env.MONGO_URI)
    console.log('connected sucessfully')
  } catch (error) {
     
  }
};