import Joi from 'joi';
import Validator from '../../core/Validator';
import { BUSSINESS_STATUS } from '../../../constants/type';

export default class BussinessValidator extends Validator {
  createOne = Joi.object({
    bussinessName: Joi.string().required(),
    bussinessDescription: Joi.string().required(),
    address: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    images: Joi.array(),
    phone: Joi.string().required(),
    owner: Joi.string().required(),
    category: Joi.string().required(),
    city: Joi.string().required(),
    availableTime: Joi.string().required(),
  });

  paramsSubmit = Joi.object({
    id: Joi.string().required(),
    submition: Joi.string().valid(BUSSINESS_STATUS.ACCEPTED, BUSSINESS_STATUS.DECLINED),
  });

  queryBussiness = Joi.object({
    limit: Joi.number().integer().min(1).max(100).default(10),
    offset: Joi.number().integer().default(0),
    orderBy: Joi.string().default('-id'),
    fields: Joi.array(),
    page: Joi.number().integer().default(0),
    filter: Joi.string(),
    search: Joi.string().trim(),
    q: Joi.string().trim(),
    category: Joi.string().trim(),
    sort: Joi.string(),
  });
}
