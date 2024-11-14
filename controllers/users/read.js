import User from "../../models/User.js"
import "../../models/Invoice.js"
import "../../models/Property.js"

export const allUser = async (req, res, next) => {
    try {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }
        let all = await User.find(query)
            .populate("invoices", "date description worth asset")
            .populate("properties", "name type worth").exec()

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export const userById = async (req, res, next) => {
    try {
        let userId = req.params.id

        let user = await User.findById(userId)
            .populate("invoices", "date description worth asset")
            .populate("properties", "name type worth")
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            })
        }

        return res.status(200).json({
            success: true,
            response: user
        })
    } catch (error) {
        next(error)
    }
}