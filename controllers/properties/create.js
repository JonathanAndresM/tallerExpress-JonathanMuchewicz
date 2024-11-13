import Property from "../../models/Property.js";
import User from "../../models/User.js";

let create = async (req, res, next) => {
    try {
        let property = req.body
        let newProperty = await Property.create(property)
        await User.findByIdAndUpdate(req.body.user, {
            $push: { properties: newProperty._id }
        });
        return res.status(201).json({
            response: newProperty
        })
    } catch (error) {
        next(error)
    }
}

export default create