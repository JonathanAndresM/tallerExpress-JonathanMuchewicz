import { Router } from "express";
import { allInvoices, invoiceById } from "../controllers/invoices/read.js";
import create from "../controllers/invoices/create.js";
import deleteById from "../controllers/invoices/delete.js";
import updateById from "../controllers/invoices/update.js";
import passport from "../middlewares/passport.js";
import { authRole } from "../middlewares/authRole.js";
import validator from "../middlewares/validator.js"
import schemaInvoiceCreate from "../schema/invoices/create.js";

const router = Router()

router.get("/all", passport.authenticate("jwt", { session: false }), allInvoices)
router.get("/invoice/:id", passport.authenticate("jwt",{session: false}), invoiceById)
router.post("/create", passport.authenticate("jwt", { session: false }),validator(schemaInvoiceCreate), create)
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),authRole(0), deleteById)
router.patch("/update/:id", passport.authenticate("jwt", {session: false}),authRole(0), updateById)

export default router