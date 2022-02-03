const mongoose =require("mongoose")

const studentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    cityname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type :String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    lat:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        required:true
    }

})

mongoose.model("Student",studentSchema)