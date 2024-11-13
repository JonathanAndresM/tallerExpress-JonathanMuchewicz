import Property from "../../models/Property.js";
import User from "../../models/User.js";

const deleteById = async (req, res, next) => {
    try {
        const propertyId = req.params.id
        console.log(propertyId);
        
        const property = await Property.findById(propertyId)
        if (!property) {
            return res.status(404).json({
                message: "Propiedad no encontrada"
            });
        }

        const userId = property.user;

        await Property.findByIdAndDelete(propertyId);

        await User.findByIdAndUpdate(userId,
            { $pull: { properties: propertyId }
        });

        res.status(200).json({
            message: "Propiedad eliminada correctamente y referencia eliminada del usuario"
        });
    } catch (error) {
        console.error(error);
        
        next(error)
    }
}

export default deleteById