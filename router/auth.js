import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import logout from "../controllers/auth/logOut.js";


const router = Router()

router.post("/signIn", accountNotExist, isValidadPassword, generateToken, signIn)
router.post("/logOut", passport.authenticate("jwt", {session: false}), logout)

export default router