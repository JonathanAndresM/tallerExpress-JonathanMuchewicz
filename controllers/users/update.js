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