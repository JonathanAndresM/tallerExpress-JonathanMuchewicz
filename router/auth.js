import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";


const router = Router()

router.post("/signIn", accountNotExist, isValidadPassword, generateToken, signIn)

export default router