import Joi from 'joi';

const signUpSchema = Joi.object({
  firstName: Joi.string().required().label('First Name'),
  lastName: Joi.string().required().label('Last Name'),
  email: Joi.string().email({ tlds: false }).required().label('Email'),
  password: Joi.string().min(6).required().label('Password'),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .label('Confirm Password'),
});

export default signUpSchema;
