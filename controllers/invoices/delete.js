import Bill from "../../models/Bill.js";
import User from "../../models/User.js";

const deleteById = async (req, res, next) => {
    try {
        const invoiceId = req.params.id
        
        const invoice = await Bill.findById(invoiceId)
        if (!invoice) {
            return res.status(404).json({
                message: "Factura no encontrada"
            });
        }

        const userId = invoice.user;

        await Bill.findByIdAndDelete(invoiceId);

        await User.findByIdAndUpdate(userId,
            { $pull: { invoices: invoiceId }
        });

        res.status(200).json({
            message: "Factura eliminada correctamente y referencia eliminada del usuario"
        });
    } catch (error) {
        next(error)
    }
}

export default deleteById