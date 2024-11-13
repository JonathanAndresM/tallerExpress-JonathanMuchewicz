import User from "../../models/User.js";
import mongoose from "mongoose";

const deleteUser = async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "ID de usuario no válido" });
        }

        const userToDelete = await User.findById(req.params.id);

        if (!userToDelete) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
console.log(userToDelete.role);

        if (userToDelete.role === 0) {
            return res.status(403).json({ message: "No se puede eliminar un administrador" });
        }

    } catch (error) {
        next(error)
    }
};

export default deleteUser
