const mongoose= require("mongoose");

const Packages =new mongoose.Schema({
    pid: { type: String, required: true },
    pname: { type: String, required: true },
    pprice: { type: Number, required: true },
    pduration: { type: String, required: true },
    

  
},
{
    collection:"PackageInfo"
}
);
mongoose.model('PackageInfo', Packages);


