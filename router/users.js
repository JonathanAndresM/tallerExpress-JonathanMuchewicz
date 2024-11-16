import { Router } from "express";
import { allUser, userById } from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import validator from "../middlewares/validator.js";
import schemaUserCreate from "../schema/users/create.js";
import schemaUserUpdate from "../schema/users/update.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import deleteById from "../controllers/users/delete.js";
import updateById from "../controllers/users/update.js";
import passport from "../middlewares/passport.js";
import { authRole } from "../middlewares/authRole.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", { session: false }), allUser)
router.get("/user/:id", passport.authenticate("jwt",{session: false}),userById)
router.post("/register", validator(schemaUserCreate), accountExists, createHash, register)
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),authRole(0), deleteById)
router.patch("/update/:id", passport.authenticate("jwt", { session: false }),authRole(0), validator(schemaUserUpdate), createHash, updateById)

export default router