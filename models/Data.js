const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('Data', dataSchema);
