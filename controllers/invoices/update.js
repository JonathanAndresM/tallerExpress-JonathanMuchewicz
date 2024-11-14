import Invoice from "../../models/Invoice.js";

const updateById = async (req, res, next) => {
    try {
        const invoiceId = req.params.id;
        
        
        const updateData = { ...req.body }
        delete updateData.user
        delete updateData.date

        const updated = await Invoice.findByIdAndUpdate(
            invoiceId,
            updateData,
            { new: true })

        if (updated) {
            return res.status(200).json({
                message: "Factura actualizada con éxito",
                response: updated
            })
        } else {
            return res.status(404).json({
                message: "Factura no encontrada"
            })
        }
    } catch (error) {
        next(error)
    }
};

export default updateById