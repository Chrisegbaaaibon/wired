// Controller -- -- --

const bear = require('../database/schema')


 exports.AddEmail = (req, res)=>{
    let email = req.body.email;
   // let email = new bear();
   console.log(email)
   // email.email = req.body.email;
   if(email == bear.findOne({email}).select("email")){
      res.status(401).json({
         message: "Email already exist!"
      })
   }else{
      let emailCreated = new bear({email})
      emailCreated.save()
      res.status(200).json({
         message: "Added!🚀🚀",
         data: emailCreated
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