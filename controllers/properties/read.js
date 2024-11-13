
import Property from "../../models/Property.js";
import "../../models/User.js";

export const allProperties = async (req, res, next) => {
    try {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }
        let all = await Property.find(query).populate('user', 'name direction email phone photo').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export const propertyById = async (req,res,next) => {
    try {
        let propertyId = req.params.id
        
        let property = await Property.findById(propertyId).populate('user','name direction email phone photo')
        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Propiedad no encontrada"
            })
        }
        
        return res.status(200).json({
            success: true,
            response: property
        })
    } catch (error) {
        next(error)
    }
}