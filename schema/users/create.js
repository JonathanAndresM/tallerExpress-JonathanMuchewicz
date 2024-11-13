import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
      "string.email": "Formato de email incorrecto.",
      "any.required": "El campo email es obligatorio."
    }),

  name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(30).required().messages({
      "string.base": "Solo puedes utilizar letras.",
      "string.pattern.base": "No están permitidos los caracteres especiales. name",
      "string.min": "Debe tener un mínimo de 4 caracteres.",
      "string.max": "Debe tener un máximo de 30 caracteres.",
      "any.required": "El campo nombre es obligatorio."
    }),

  direction: Joi.string().pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s.,]+$/).min(10).max(50).required().messages({
      "string.base": "Solo puedes utilizar letras, números, y también (. y ,).",
      "string.pattern.base": "No están permitidos los caracteres especiales. direc",
      "string.min": "Debe tener un mínimo de 10 caracteres.",
      "string.max": "Debe tener un máximo de 50 caracteres.",
      "any.required": "El campo dirección es obligatorio."
    }),

  password: Joi.string().pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/).min(6).max(20).required().messages({
      "string.base": "Solo puedes utilizar letras y números.",
      "string..pattern.base": "No están permitidos los caracteres especiales. pass",
      "string.min": "Debe tener un mínimo de 6 caracteres.",
      "string.max": "Debe tener un máximo de 20 caracteres.",
      "any.required": "El campo contraseña es obligatorio."
    }),

  phone: Joi.string().pattern(/^\d{10}$/).required().messages({
      "string.base": "Solo puedes utilizar números para el teléfono.",
      "string.pattern.base": "El número telefónico debe tener exactamente 10 dígitos y solo puede contener números.",
      "any.required": "El número telefónico es obligatorio."
    }),

  photo: Joi.string().uri().required().messages({
      "string.uri": "La URL de la foto no es válida.",
      "any.required": "El campo de la foto es obligatorio."
    }),

  role: Joi.number().integer().min(0).max(5).required().messages({
      "number.base": "El rol debe ser un número.",
      "number.integer": "El rol debe ser un número entero.",
      "number.min": "El rol no puede ser menor que 0.",
      "number.max": "El rol no puede ser mayor que 5.",
      "any.required": "El campo rol es obligatorio."
    })
});

export default schema;