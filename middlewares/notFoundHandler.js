const notFoundHandler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `La peticion con el metodo ${req.method} con la ruta ${req.url} - Not Found`
    })
}

export default notFoundHandler