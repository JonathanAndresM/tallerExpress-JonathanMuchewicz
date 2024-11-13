import User from "../../models/User.js";

let deleteById = async (req, res, next) => {
    try {
        let deleteUser = await User.findByIdAndDelete(req.params.id);
        
        if (deleteUser) {
            return res.status(200).json({
                message: "Usuario eliminado con éxito.",
                response: deleteUser
            });
        } else {
            return res.status(404).json({
                message: "Usuario no encontrado."
            });
        }
    } catch (error) {
        next(error);
    }
};

export default deleteById;