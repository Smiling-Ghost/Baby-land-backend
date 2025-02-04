const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.err("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

//bozz9617
//rHFStbhFQvs59gNt
//mongodb+srv://bozz9617:rHFStbhFQvs59gNt@cluster0.6jcvo.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
