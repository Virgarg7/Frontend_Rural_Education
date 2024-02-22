const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
        enum: []
    },
    state: {
        type: String,
        required: true,
        enum: []
    },
    zip_code: {
        type: String,
        required: true
    }
}, { timestamps: true })


const Register = mongoose.model("Register", Schema)

export default Register;
