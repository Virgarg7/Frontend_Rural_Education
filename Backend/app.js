const express = require("express");

const mainRouter = express.Router();

const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signUp");
const registerRouter = require("./routes/register");

mainRouter.use("/login",loginRouter)
mainRouter.use("/signUp",signUpRouter)
mainRouter.use("register",registerRouter)


//Export----------------------------->
export default mainRouter;