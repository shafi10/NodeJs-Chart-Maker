const Data = require('../models/Data');

exports.getdata=(req,res,next)=>{
  Data.find()
     .then(result=>{
       res.render('index',{
         employees:result
       })
     })
     .catch(err=>{
       console.log(err);
     })
};


exports.getren=(req,res,next)=>{
  res.render('api/add',{
    path:'api/add'
  })
};

exports.postdata=(req,res,next)=>{
  const name=req.body.name;
  const age= req.body.age;

  const data  = new Data({
    name:name,
    age:age
  });

  data.save()
  .then(result =>{
    res.redirect('/');
  })
  .catch(err =>{
    console.log(err);
  })
};


exports.getchart=(req,res,next)=>{
  Data.find()
     .then(docs=>{
       res.send(docs);
     })
     .catch(err=>{
       console.log(err);
     })
};
