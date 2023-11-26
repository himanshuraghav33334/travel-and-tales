const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = 'mongodb+srv://TravelsAndTales:root@cluster0.yaawcjc.mongodb.net/TravelsAndTales?retryWrites=true&w=majority'
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

  // Define a simple route
    app.get('/', async (req, res) => {
      try {
        const fetched_data = await mongoose.connection.db.collection("food_items")
        .find({})
        .toArray();
        console.log(fetched_data);
        res.send(fetched_data);
        //  global.food_items=data;
        console.log(global.food_items);
      } catch (error) {
        console.error('Error reading data from MongoDB:', error);
        res.status(500).send('Internal Server Error');
      }
    });
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header(
        "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept"
      );
      next();
    });
    app.use(express.json())
    app.use('/api', require("./Routes/CreateUser"));
    // app.use('/api', require("./Routes/DisplayData"));
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();