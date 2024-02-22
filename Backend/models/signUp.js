const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_no: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true });

// Mongodb Middlewares 
// It will encrypt the password just before storing into the database 
signUpSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
});

signUpSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const SignUp = mongoose.model("signUp", signUpSchema);

module.exports = SignUp;
