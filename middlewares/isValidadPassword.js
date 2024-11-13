import bcryptjs from "bcryptjs"

export default (req,res,next) => {
    let passBody = req.body.password
    let passDB = req.user.password

    let compare = bcryptjs.compareSync(
        passBody,
        passDB
    )
    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
    })
}