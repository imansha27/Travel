const e = require("express");
const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json())
const cors=require("cors");
app.use(cors());
//const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const JWT_SECRET="hrbbjbjehuhjnoqio3i8499#ffr";


const mongoUrl="mongodb+srv://test1:afterglow@cluster0.wmbifc9.mongodb.net/?retryWrites=true&w=majority"

//showing whether the database is connected or not
mongoose
.connect(mongoUrl,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("Connected to database");
})
.catch(e=>console.log(e));



//import userdetails schema
require("./userdetails");
const User=mongoose.model("UserInfo");

//register API
app.post("/register",async(req,res)=>{
   const {cardno,fname,lname,Country,Price,Email,Username,Password} =req.body;
    // const encryptpass=await bcrypt.hash(Password,20)


  try {
    
    const existingUser = await User.findOne({
      $or: [{
        cardno
      }, {
        Username
      }]
    });

    if (existingUser) {
      // Checking if the cardno already exists
      if (existingUser.cardno === cardno) {
        return res.send({
          status: "error",
          message: "1"
        });
      }

      // Checking if the username already exists
      if (existingUser.Username === Username) {
        return res.send({
          status: "error",
          message: "2"
        });
      }
    } else {
      // Creating a new user in the database
      await User.create({
        cardno,
        fname,
        lname,
        Country,
        Price,
        Email,
        Username,
        Password
        // Password: encryptpass,
      });

    
      return res.send({
        status: "ok"
      });
    }
  } catch (error) {
    
    console.error(error);
    return res.send({
      status: "error",
      message: error.message || "Internal Server Error"
    });
  }
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({
    status: "error",
    message: err.message || "Internal Server Error"
  });
});







//user login API
app.post("/login-user",async(req,res)=>{
  const{Username,Password}=req.body;
  const user=await User.findOne({Username});
if (!user){
  return res.json({error:"User Dosen't Exists"});
  
}
//if (await bcrypt.compare(Password,user.Password))

if (Password===user.Password)
  {
    const token=jwt.sign({Username:user.Username},JWT_SECRET);
    if(res.status(201)){
    
      return res.json({status:"ok",data:token})
     
    }else{
      return res.json({error:"error"})
    }
    
}
res.json({status:"error",error:"invalid password"})
console.log("invalid password");
});



//API to get user details to the user profile

app.post("/userData", async (req, res) => {
  const { token } = req.body; 

  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    const Username = user.Username; 
    User.findOne({ Username: Username }).then((data) => {
      res.send({ status: "ok", data: data });
    }).catch((error) => {
      res.send({ status: "error", data: error }); 
    });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", data: error });
  }
});



//import packages schema
// require("./packages");
// const Package=mongoose.model("PackageInfo");

// app.post("/addpackage",async(req,res)=>{
//   const {pid,pname,pprice,pduration} =req.body;
//   await Package.create({
    
//     pid,
//     pname,
//     pprice,
//     pduration
 

//   });
//   return res.send({
//     status: "ok"
//   });

//});




// const PackageInfo = require("./PackageInfo");

// // Define the /addpackage API endpoint
// app.post("/addpackage", async (req, res) => {
//   const { pid, pname, pprice, pduration } = req.body;

//   try {
//     // Create a new PackageInfo document in the database
//     await PackageInfo.create({
//       pid,
//       pname,
//       pprice,
//       pduration
//     });

//     return res.send({
//       status: "ok"
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     return res.status(500).send({
//       error: "Internal server error"
//     });
//   }
// });




//send package data



app.listen(5000,()=>{
    console.log("Server Started");
});


