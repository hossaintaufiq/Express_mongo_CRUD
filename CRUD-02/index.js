import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
// const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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
