import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(30).required().messages({
        "string.base": "Solo puedes utilizar letras.",
        "string.pattern.base": "No están permitidos los caracteres especiales. name",
        "string.min": "Debe tener un mínimo de 4 caracteres.",
        "string.max": "Debe tener un máximo de 30 caracteres.",
        "any.required": "El campo nombre es obligatorio."
      }),
    
    type: Joi.string().valid("Residencial", "Vehículo", "Terreno", "Comercial").required().messages({
            "string.base": "El tipo debe ser un texto",
            "any.only": "El tipo debe ser uno de los siguientes: Residencial, Vehículo, Terreno o Comercial",
            "any.required": "El tipo es obligatorio"
        }),
    
    worth: Joi.number().positive().required().messages({
            "number.base": "El valor debe ser un número",
            "number.positive": "El valor debe ser positivo",
            "any.required": "El valor es obligatorio"
        }),

    user: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
            "string.base": "El ID de usuario debe ser un texto",
            "string.pattern.base": "El ID de usuario debe ser un ObjectId válido",
            "any.required": "El ID de usuario es obligatorio"
        })
});

export default schema;