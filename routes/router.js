// Routes 
const router   = require('express').Router();
const AddEmail = require('../controller.js/handler'),
         GetEmails = require('../controller.js/handler')

router.use((req, res, next)=>{
   console.log('Good to go!')
   next()
})

router.use('/api', router);

router.post('/api/addEmail', (req, res)=>{
   AddEmail
});

router.get('/api/emails', (req, res)=>{
   GetEmails
});

module.exports = router;