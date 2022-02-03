const express=require("express")
const mongoose=require("mongoose")

const MONGOURI = "mongodb+srv://abhinav:DQoQMtugexIKBvq5@cluster0.mqfw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("Connected to database")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error on connecting ", err);
})


const app=express();

require("./models/student")




app.use(express.json())


app.use(require('./routes/post.js'))

app.listen(5000,()=>{
    console.log("Server is running on 5000");
})