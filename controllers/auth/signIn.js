import User from "../../models/User.js";

export default async (req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        console.log(req.body);
        
        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: {
                email: req.user.email,
                name: req.user.name,
                direction: req.user.direction,
                phone: req.user.phone,
                photo: req.user.photo,
                role: req.user.role
            },
            token: req.token
        })
    } catch (error) {
        console.error(error);
        
        next(error)
    }
}