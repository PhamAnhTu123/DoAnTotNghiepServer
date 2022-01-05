import Joi from 'joi';
import Validator from '../../core/Validator';

export default class ServiceValidator extends Validator {
  createOne = Joi.object({
    bussiness: Joi.string().required(),
    serviceName: Joi.string().required(),
    serviceDescription: Joi.string().required(),
    servicePrice: Joi.number().required(),
    image: Joi.string().required(),
  });
}
