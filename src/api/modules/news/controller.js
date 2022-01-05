import Controller from '../../core/Controller';
import NewsService from './service';

export default class NewsController extends Controller {
  constructor() {
    super();
    this.service = new NewsService();
  }

  createNews(request) {
    const { payload } = request;
    return this.service.createNews(payload);
  }

  getNewsOfBussiness(request) {
    const {
      params: { id },
      query,
    } = request;
    return this.service.getNewsOfBussiness(id, query);
  }
}
