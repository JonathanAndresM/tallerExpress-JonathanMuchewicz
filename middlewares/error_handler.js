const error_handler = (error,req,res,next) => {
    
    return res.status(500).json({
        success: false,
        response: error.message,
        message: "error"
    })
}

export default error_handler