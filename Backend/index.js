const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./app");

const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

// create an App
const app = express();

// Create the Middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route 
app.use("/api/v1", mainRouter);

const port = process.env.PORT || 8000;

mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Add this option to avoid deprecation warning
    })
    .then(() => {
        console.log('Connection to database established');
        // Listen app if connection is established 
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
