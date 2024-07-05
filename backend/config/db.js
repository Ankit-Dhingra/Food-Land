import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ankitdhingra02:Ankit%402002@cluster0.ipvajza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/FoodLand').then(()=>console.log("DB Connected"));
   
}


