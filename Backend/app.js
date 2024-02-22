const express = require("express");
const mainRouter = express.Router();

const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signUp");
const registerRouter = require("./routes/register");

mainRouter.use("/login", loginRouter);
mainRouter.use("/signup", signUpRouter);
mainRouter.use("/register", registerRouter);

//Export----------------------------->
module.exports = mainRouter;
