import { Router } from "express";
import { allInvoices, invoiceById } from "../controllers/invoices/read.js";
import passport from "../middlewares/passport.js";
import create from "../controllers/invoices/create.js";
import deleteById from "../controllers/invoices/delete.js";
import { authRole } from "../middlewares/authRole.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", { session: false }), allInvoices)
router.get("/invoice/:id", passport.authenticate("jwt",{session: false}), invoiceById)
router.post("/create", passport.authenticate("jwt", { session: false }), create)
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),authRole(0), deleteById)

export default router