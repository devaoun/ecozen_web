import Joi from 'joi'

const registerSchema = Joi.object(
    {
        username: Joi.string().required().trim().messages({ 'string.empty': 'Please fill username' }),
        password: Joi.string().required().min(6).max(14)
            .messages({
                'string.empty': 'Please fill password',
                'string.max': 'password must be 6-14 characters',
                'string.min': 'password must be 6-14 characters'
            }),

        confirmPassword: Joi.string().required().valid(Joi.ref('password')).strip()
            .messages({
                'string.empty': 'confirm password is required',
                'any.only': 'confirm password not match'
            }),
    }
)

const validateRegister = input => {
    const { value, error } = registerSchema.validate(input, { abortEarly: false })
    if (error) {
        const result = error.details.reduce((acc, item) => {
            acc[item.path[0]] = item.message;
            return acc
        }, {})
        return result
    }
}

export default validateRegister