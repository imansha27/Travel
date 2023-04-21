const mongoose= require("mongoose");

const UserDetailsSchema =new mongoose.Schema({
    cardno:{type:String,unique:true, required: true },
    fname: { type: String, required: true },
    lname:{ type: String, required: true },
    Country:{ type: String, required: true },
    Price:{ type: String, required: true },
    Email:{ type: String, required: true },
    Username:{type:String,unique:true,required: true },
    Password:{ type: String, required: true },

  
},
{
    collection:"UserInfo"
}
);
mongoose.model('UserInfo', UserDetailsSchema);