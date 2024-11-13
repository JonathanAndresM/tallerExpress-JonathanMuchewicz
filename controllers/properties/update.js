import Property from "../../models/Property.js";

const updateById = async (req, res, next) => {
    try {
        const propertyId = req.params.id;
        
        
        const updateData = { ...req.body };
        delete updateData.user;

        const updated = await Property.findByIdAndUpdate(
            propertyId,
            updateData,
            { new: true })

        if (updated) {
            return res.status(200).json({
                message: "Propiedad actualizada con éxito",
                response: updated
            });
        } else {
            return res.status(404).json({
                message: "Propiedad no encontrada"
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateById;