const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    phone_no: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true })

// Mongodb Middlewares 
// It will encypt the password just before storing into database 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const login = mongoose.model("login", Schema)

export default login;
