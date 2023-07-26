import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { sample_foods, sample_users } from "./data"


const app = express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

mongoose.connect('mongodb://127.0.0.1:27017/TCfood')
  .then(() => console.log('Connected!'));

app.get("/api/foods",(req, res)=>{
    res.send(sample_foods)
})
//get food via searchTerm 
app.get("/api/foods/search/:searchTerm",(req, res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food =>food.name.toLowerCase().includes
    (searchTerm.toLowerCase()));
    res.send(foods)
})

//get Food by ID
app.get("/api/foods/:foodId",(req, res)=>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id ==foodId);

    res.send(food)
})
// Login API
app.post("/api/users/login",(req, res)=>{
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email ===email && user.password ===password);

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("user name or password is not valid!")
    }

})

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "TCfood",{
        expiresIn:"30d"
    });
    user.token = token;
    return user;
} 
    
const port = 3000;
app.listen(port,()=>{
    console.log("Website is Running On http://localhost:"+port)
})