const mongoose=require('mongoose');

const multer=require('multer');

const path=require('path');
const AVATAR_PATH=path.join('/uploads/users/avatar');

const fileSchema=new mongoose.Schema({
    
    avatar:{
       type:String;
    }
},{
    timestamps:true
});


let  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

  

  
const CSV=mongoose.model('CSV',fileSchema);


module.exports=CSV;