const express = require('express');
const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(router);

app.get('/', (req, res)=>{
   res.json({
      message: "Sure!����"
   })
})

app.use( bodyParser.json());

app.listen(3500, ()=>{
   console.log('running on http://localhost:3500')
});