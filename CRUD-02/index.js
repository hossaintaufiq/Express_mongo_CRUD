import express from "express";
import mongoose from "mongoose";
// import Product from "./models/productModel.js";
import Product from "./model/productModel.js";

const app = express();
app.use(express.json());
// const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
app.get("/api/products", async (req, res) => {
    try{
        const products=await Product.find();
        res.status(200).json(products)

    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
})

// get product by id 
app.get('/api/products/:id',async(req,res)=>{
    try{
        const product= await Product.findById(req.params.id);
        if(product){
            res.status(200).json(product);
        }else{
            res.status(404).json({message:"Product Not Found"})
        }

    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
})

// update a product by id 
app.put('/api/products/:id',async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body);
        if(!product){
            // Product.Update(req.params.id,req.body,{new:true});
            return res.status(200).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product Updated Successfully"})
        
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
})

// delete a product by id 
app.delete('/api/products/:id', async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message:"Product Not Found"})
        }
        res.status(200).json({message:"Product Deleted Successfully"})
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
})

app.post("/api/products", async(req, res) => {
  
  try{
    const product= await Product.create(req.body);
    res.status(200).json(product);
  }catch(err){
    res.status(500).json({message: "Internal Server Error"});
  }
});

mongoose
  .connect(
    "mongodb+srv://hossainahmmedtaufiq22_db_user:yJxvXD5HVjSgmKvk@cluster0.myjowpg.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb is connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e, "mongodb is not connected");
  });
