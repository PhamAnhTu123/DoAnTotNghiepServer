import Joi from 'joi';
import Validator from '../../core/Validator';

export default class CityValidator extends Validator {
  createOne = Joi.object({
    cityName: Joi.string().required(),
  });
}
