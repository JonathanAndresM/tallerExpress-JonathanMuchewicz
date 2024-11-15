import Invoice from "../../models/Invoice.js";
import User from "../../models/User.js";

let create = async (req, res, next) => {
    try {
        let invoice = req.body
        let newInvoice = await Invoice.create(invoice)
        await User.findByIdAndUpdate(req.body.user, {
            $push: { invoices: newInvoice._id }
        });
        return res.status(201).json({
            response: newInvoice
        })
    } catch (error) {
        next(error)
    }
}

export default create