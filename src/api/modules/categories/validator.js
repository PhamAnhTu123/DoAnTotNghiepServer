import Joi from 'joi';
import Validator from '../../core/Validator';

export default class CategoryValidator extends Validator {
  createOne = Joi.object({
    categoryName: Joi.string().required(),
    categoryDescription: Joi.string().required(),
  });
}
