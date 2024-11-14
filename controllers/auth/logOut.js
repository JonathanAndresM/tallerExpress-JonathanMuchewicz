import User from "../../models/User.js";

const logout = async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: false }
        )
        
        return res.status(200).json({
            success: true,
            message: "Sesión cerrada exitosamente"
        })
        
    } catch (error) {
        console.error(error);
        
        next(error);
    }
};

export default logout;
