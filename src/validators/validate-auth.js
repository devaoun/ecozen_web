import Joi from 'joi';

const authSchema = Joi.string().required().email({ tlds: false })
    .messages({
        'string.empty': 'invalid email',
        'string.email': 'invalid email format'
    });

const validateEmail = (input) => {
    const { error } = authSchema.validate(input, { abortEarly: false });
    
    if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        return errorMessages;
    }
};

export default validateEmail