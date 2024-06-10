import Joi from 'joi'

const profileInfoSchema = Joi.object(
    {
        firstname : Joi.string().required().messages({'string.empty' : 'Firstname is required'}),
        lastname : Joi.string().required().messages({'string.empty' : 'Lastname is required'}),
        phoneNumber : Joi.string().required().messages({'string.empty' : 'phoneNumber is required'}),
        address : Joi.string().required().messages({'string.empty' : 'address is required'})
    }
)

const validateProfileInfo = input => {
    const {value , error} = profileInfoSchema.validate(input,{abortEarly: false});

    if(error) {
        const result = error.details.reduce((acc,item)=> {
            acc[item.path[0]] = item.message;
            return acc
        },{});
        return result
    }
}

export default validateProfileInfo