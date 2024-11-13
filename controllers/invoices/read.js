import Bill from "../../models/Bill.js";
import "../../models/User.js";

export const allInvoices = async (req,res,next) => {
    try {
        let {description} = req.query
        let query = {}
        if (description) {
            query.description = {$regex: '^'+description, $options: 'i'}
        }
        let all = await Bill.find(query).populate('user','name direction email phone photo').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export const invoiceById = async (req,res,next) => {
    try {
        let invoiceId = req.params.id
        
        let invoice = await Bill.findById(invoiceId).populate('user','name direction email phone photo')
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Factura no encontrada"
            })
        }
        
        return res.status(200).json({
            success: true,
            response: invoice
        })
    } catch (error) {
        next(error)
    }
}

