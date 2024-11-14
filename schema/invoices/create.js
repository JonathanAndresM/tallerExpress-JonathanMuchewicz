import Joi from "joi";

const schema = Joi.object({
    date: Joi.date().required().messages({
        "date.base": "La fecha debe ser un formato de fecha válido.",
        "any.required": "La fecha es obligatoria."
    }),
    description: Joi.string().min(10).max(50).required().messages({
        "string.base": "La descripción debe ser un texto.",
        "string.min": "La descripción debe tener al menos 10 caracteres.",
        "string.max": "La descripción no puede exceder los 50 caracteres.",
        "any.required": "La descripción es obligatoria."
    }),
    worth: Joi.number().positive().required().messages({
        "number.base": "El valor debe ser un número.",
        "number.positive": "El valor debe ser un número positivo.",
        "any.required": "El valor es obligatorio."
    }),
    asset: Joi.boolean().required().messages({
        "boolean.base": "El activo debe ser un valor booleano.",
        "any.required": "El activo es obligatorio."
    }),
    user: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.base": "El ID de usuario debe ser un texto",
        "string.pattern.base": "El ID de usuario debe ser un ObjectId válido",
        "any.required": "El ID de usuario es obligatorio"
    })
})

export default schema