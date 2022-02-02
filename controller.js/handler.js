// Controller -- -- --

const bear = require('../database/schema')


 exports.AddEmail = (req, res)=>{
   let email = new bear();
   email.email = req.body.email;
   if(email.email == bear.findById){
      res.status(401).json({
         message: "Email already exist!"
      })
   }else{
      res.status(200).json({
         message: "Added!🚀🚀"
      })
      console.log("🚀")
   }
}

exports.GetEmails = ( req, res)=>{
   bear.find((err, emails)=>{
      if(err){
         console.log(err)
         res.status(401).json({
            message: "Couldn't retrieve all emails!!😑😑"
         });
      }else{
         res.json(emails)
      };
   });
}