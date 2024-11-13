import { Router } from "express";
import { allProperties, propertyById } from "../controllers/properties/read.js";
import passport from "../middlewares/passport.js";
import create from "../controllers/properties/create.js";
import deleteById from "../controllers/properties/delete.js";
import { authRole } from "../middlewares/authRole.js";
import updateById from "../controllers/properties/update.js";
import validator from "../middlewares/validator.js";
import schemaPropertyCreate from "../schema/properties/create.js";
import schemaPropertyUpdate from "../schema/properties/update.js";



const router = Router()

router.get("/all", passport.authenticate("jwt", { session: false }), allProperties)
router.get("/property/:id",passport.authenticate("jwt", {session: false}), propertyById)
router.post("/create", passport.authenticate("jwt", { session: false }),authRole(0),validator(schemaPropertyCreate), create)
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),authRole(0), deleteById)
router.patch("/update/:id", passport.authenticate("jwt", { session: false }),authRole(0),validator(schemaPropertyUpdate), updateById)

export default router