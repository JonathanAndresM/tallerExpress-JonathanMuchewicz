import Joi from "joi";

const updateSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(30).messages({
        "string.base": "Solo puedes utilizar letras",
        "string.pattern.base": "No se permiten caracteres especiales. name",
        "string.min": "Debe tener un mínimo de 4 caracteres",
        "string.max": "Debe tener un máximo de 30 caracteres"
    }),
    direction: Joi.string().pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s.,]+$/).min(10).max(50).messages({
        "string.base": "Solo puedes utilizar letras, números y también (. y ,)",
        "string.pattern.base": "No se permiten caracteres especiales. direc",
        "string.min": "Debe tener un mínimo de 10 caracteres",
        "string.max": "Debe tener un máximo de 50 caracteres"
    }),
    password: Joi.string().min(6).max(20).pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/).messages({
        "string.base": "Solo puedes utilizar letras y números",
        "string.pattern.base": "No se permiten caracteres especiales distintos de letras y números",
        "string.min": "Debe tener un mínimo de 6 caracteres",
        "string.max": "Debe tener un máximo de 20 caracteres"
    }),
    phone: Joi.string().pattern(new RegExp("^[0-9]{10}$")).messages({
        "string.pattern.base": "El número telefónico debe tener exactamente 10 dígitos"
    }),
    photo: Joi.string().uri().messages({
        "string.uri": "La URL de la foto no es válida"
    }),
    role: Joi.number().integer().min(0).max(5).messages({
        "number.base": "El rol debe ser un número entero",
        "number.min": "El rol mínimo es 0",
        "number.max": "El rol máximo es 5"
    })
})

export default updateSchema;
