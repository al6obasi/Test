let utils=require('../../config/utils.js');
let jwt = require('jwt-simple');
let User = require('./UserModel.js');

module.exports = {
  signin: function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        
        if(data.length === 0){
          res.json("username wrong")
        }
        else{
          utils.comparePass(password,data[0].password,function(ok){
            if(ok){
              let token=jwt.encode(data[0],'user');
              res.json({token:token, id:data[0]._id})
            }
            else{
              res.json("password wrong")
            }
          })
        }
      }
    })
  },
  signup: function (req, res) {
    // console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;    
    let date = new Date().toUTCString().substr(0,16);
     utils.hashpass(password,function(hash){
             password=hash});
   
     User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }else{
            User.find({username:username},function(err,data){
              if(err){
                res.json(err)
              }
              else{
                if(data.length === 0){
                  User.create({username:username,password:password,email:email,date:date},function(err,data){
                      if(err){
                        res.json(err)
                      }
                      else{
                        let ok="ok"
                        res.json({ok:ok})
                      }
                  })
                }
                else{
                  res.json("email already exist")
                }
              }
            })
        }
     })   
  }
};


              


 