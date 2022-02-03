const express=require("express")
const mongoose =require("mongoose")
const Student=mongoose.model("Student")
const router=express.Router()

router.get("/search",(req,res)=>{
    console.log(req)
    let name="nashik"
    Student.find({cityname: {'$regex' : "^"+name+"$",'$options' : 'i'}}).then((mydata)=>{
        res.json(mydata)
        console.log(mydata)
    })
})
router.post("/search",(req,res)=>{
    const{cityname}=req.body;
  
    Student.find({cityname: {'$regex' : "^"+cityname+"$",'$options' : 'i'}}).then((mydata)=>{
        res.json(mydata)
        console.log(mydata)
    })
})

router.post("/home",(req,res)=>{
    console.log(req.body)

    const{fname,lname,collegename,cityname,email,contact,address,lat,lang}=req.body;

    if(!fname || !lname || !collegename || !cityname || !email || !contact || !address || !lat || !lang)
    {
        res.status(422).json({error :"Please Filled all the fileds"})
    }
    else
    {
        Student.findOne({email:email}).then((saveduser)=>{
                if(saveduser)
                {
                    console.log("Student is already registered")
                    res.status(422).json({message:"Student is already registered"})
                }
                else
                {
                    const student=new Student({
                        fname,lname,collegename,cityname,email,contact,address ,lat ,lang
                    })
                    student.save().then(student=>{
                        console.log("Student Registed")
                        res.json({message:"User Registred Succesfully"})
                    })
                }
        })
    }
    

    
})

module.exports=router