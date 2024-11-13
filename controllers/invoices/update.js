import Bill from "../../models/Bill";

const updateById = async (req, res, next) => {
    try {
        const invoiceId = req.params.id;
        
        
        const updateData = { ...req.body };
        delete updateData.user;

        const updated = await Bill.findByIdAndUpdate(
            invoiceId,
            updateData,
            { new: true })

        if (updated) {
            return res.status(200).json({
                message: "Factura actualizada con éxito",
                response: updated
            });
        } else {
            return res.status(404).json({
                message: "Factura no encontrada"
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateById;