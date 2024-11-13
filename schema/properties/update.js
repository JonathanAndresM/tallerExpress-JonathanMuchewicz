import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(30).messages({
        "string.base": "Solo puedes utilizar letras",
        "string.pattern.base": "No se permiten caracteres especiales. name",
        "string.min": "Debe tener un mínimo de 4 caracteres",
        "string.max": "Debe tener un máximo de 30 caracteres"
    }),
    type: Joi.string().valid("Residencial", "Vehículo", "Terreno", "Comercial").optional().messages({
        "string.base": "El tipo debe ser un texto",
        "any.only": "El tipo debe ser uno de los siguientes: Residencial, Vehículo, Terreno o Comercial",
    }),
    worth: Joi.number().positive().optional().messages({
        "number.base": "El valor debe ser un número",
        "number.positive": "El valor debe ser positivo",
    })
});

export default schema;