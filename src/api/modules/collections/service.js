import Boom from '@hapi/boom';
import Service from '../../core/Service';
import Collection from '../../../database/models/Collection';
import errors from '../../../constants/errors';

export default class CollectionService extends Service {
  constructor() {
    super();
    this.model = Collection;
  }

  async createCollection(payload, userId) {
    const collection = await this.model.create({
      ...payload,
      user: userId,
    });
    return collection;
  }

  async addBussiness(id, bussiness) {
    const collection = await this.model.findByIdAndUpdate(id, {
      $push: { bussinesses: { bussiness } },
    });
    return collection;
  }

  async getCollectionOfUser(userId) {
    const collections = await this.model
      .find({
        user: userId,
      })
      .populate(['bussinesses.bussiness']);
    return collections;
  }

  async getOneCollection(id) {
    const collection = await this.model.findById(id).populate(['bussinesses.bussiness']);
    return collection;
  }
}
