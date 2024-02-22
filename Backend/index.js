const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("bodyParser")

// create an App
const app = express();

// Create the Middle wares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Route 
app.use("/api/v1", mainRouter)

const port = 3000 || process.env.PORT

mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('connection to database eshtablished')
        // Listen app if connection is established 
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
})
