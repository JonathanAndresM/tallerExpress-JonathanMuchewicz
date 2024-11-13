import { Router } from "express";
import users from "./users.js"
import auth from "./auth.js"
import invoices from "./invoices.js"
import properties from "./properties.js"

const router = Router()

router.use("/users", users)
router.use("/auth", auth)
router.use("/invoices", invoices)
router.use("/properties", properties)

export default router