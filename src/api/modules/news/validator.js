import Joi from 'joi';
import Validator from '../../core/Validator';

export default class ServiceValidator extends Validator {
  createOne = Joi.object({
    bussiness: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string().required(),
  });
}
