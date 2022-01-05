import Boom from '@hapi/boom';
import Service from '../../core/Service';
import Bussiness from '../../../database/models/Bussiness';
import Category from '../../../database/models/Category';
import { BUSSINESS_STATUS } from '../../../constants/type';
import errors from '../../../constants/errors';

export default class BussinessService extends Service {
  constructor() {
    super();
    this.model = Bussiness;
  }

  async submitBussinesses(id, submition) {
    const bussiness = await this.model.findOne({ _id: id, status: BUSSINESS_STATUS.PENDING });
    if (!bussiness) {
      throw Boom.notFound(errors.BUSSINESS_NOT_FOUND);
    }
    bussiness.status = submition;
    await bussiness.save();
    return { status: true, bussiness };
  }

  async findOne(id) {
    const bussiness = await this.model.findById(id).populate(['category', 'owner', 'city']);
    return bussiness;
  }

  async getAllBussiness(query) {
    if (query.q) {
      query.filter = {
        ...query.filter,
        status: query.q,
      };
    }
    if (query.category) {
      const category = await Category.findOne({
        categoryName: query.category,
      });
      query.filter = {
        ...query.filter,
        category: category.id,
      };
    }
    const bussinesses = await this.model.queryBuilder(query, ['owner', 'city', 'category']);
    return bussinesses;
  }

  async getOwnerBussiness(userId) {
    const bussinesses = await this.model
      .find({
        owner: userId,
      })
      .populate(['city', 'category']);
    return bussinesses;
  }
}
