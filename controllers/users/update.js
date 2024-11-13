/*import User from "../../models/User.js";

const updateById = {
    update: async (req, res, next) => {
        try {
            let upd = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            if (upd) {
                return res.status(200).json({ response: upd })
            } else {
                return res.status(404).json({ response: 'not found' })
            }    
        } catch (error) {
            next(error)
        }
    }
}


export default updateById*/

import User from '../../models/User.js';

const updateById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        
        
        const updateData = { ...req.body };
        delete updateData.email;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true })

        if (updatedUser) {
            return res.status(200).json({
                message: "Usuario actualizado con éxito",
                response: updatedUser
            });
        } else {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateById;