import Joi from 'joi';

const signInSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().label('Email'),
  password: Joi.string().required().label('Password'),
});

export default signInSchema;
