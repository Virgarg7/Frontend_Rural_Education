const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    phone_no: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true });

// Mongodb Middleware 
// It will encrypt the password just before storing it into the database 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Login = mongoose.model("Login", userSchema);

module.exports = Login