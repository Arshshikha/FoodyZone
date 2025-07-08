const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://arshshikhay:XweGpQnuKfJDk87m@cluster0.ovfc0vj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;
        
        const foodCollection = db.collection("food_items");
        const categoryCollection = db.collection("foodCategory");

        // Fetch data
        const foodItems = await foodCollection.find({}).toArray();
        const foodCategories = await categoryCollection.find({}).toArray();

        // Save to globals
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("Data fetched and saved to global variables");
    }
    catch(err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;