import Joi from "joi";

const schema = Joi.object({
    description: Joi.string().min(10).max(50).required().messages({
        "string.base": "La descripción debe ser un texto.",
        "string.min": "La descripción debe tener al menos 10 caracteres.",
        "string.max": "La descripción no puede exceder los 50 caracteres."
    }),
    worth: Joi.number().positive().required().messages({
        "number.base": "El valor debe ser un número.",
        "number.positive": "El valor debe ser un número positivo."
    }),
    asset: Joi.boolean().required().messages({
        "boolean.base": "El activo debe ser un valor booleano."
    })
});

export default schema;