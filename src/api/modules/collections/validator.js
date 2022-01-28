import Joi from 'joi';
import Validator from '../../core/Validator';

export default class CollectionValidator extends Validator {
  createOne = Joi.object({
    collectionName: Joi.string().required(),
    collectionDescription: Joi.string().required(),
  });

  addBussiness = Joi.object({
    bussiness: Joi.string().required(),
  });
}
