import Joi from 'joi';
import Validator from '../../core/Validator';

export default class ServiceValidator extends Validator {
  createOne = Joi.object({
    bussiness: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    point: Joi.number().min(1).max(5).required(),
    image: Joi.string(),
  });
}
