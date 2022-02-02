const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(MONGO_URI)