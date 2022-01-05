import Boom from '@hapi/boom';
import Service from '../../core/Service';
import Collection from '../../../database/models/Collection';
import errors from '../../../constants/errors';

export default class NewsService extends Service {
  constructor() {
    super();
    this.model = Collection;
  }

  async createNews(payload, userId) {
    const collection = await this.model.create({
      ...payload,
      user: userId,
    });
    return collection;
  }

  async getNewsOfBussiness(id, query) {
    query.filter = {
      ...query.filter,
      bussiness: id,
    };
    const news = await this.model.queryBuilder(query);
    return news;
  }
}
