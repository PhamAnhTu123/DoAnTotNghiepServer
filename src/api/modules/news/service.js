import Boom from '@hapi/boom';
import Service from '../../core/Service';
import News from '../../../database/models/News';
import Bussiness from '../../../database/models/Bussiness';
import errors from '../../../constants/errors';

export default class NewsService extends Service {
  constructor() {
    super();
    this.model = News;
  }

  async createNews(payload) {
    const news = await this.model.create(payload);
    return news;
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
