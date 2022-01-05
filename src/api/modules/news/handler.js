import ROLE from '../../../constants/role';
import NewsController from './controller';
import ReviewValidator from './validator';

class NewsHandler {
  constructor(server) {
    this.controller = new NewsController();
    this.validator = new ReviewValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one review',
    notes: 'Add one review',
    handler: this.controller.createNews,
    auth: {
      strategy: 'jwt',
      scope: ROLE.OWNER,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getNewsOfBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Get all reviews of bussiness',
    notes: 'Get all reviews of bussiness',
    handler: this.controller.getNewsOfBussiness,
    auth: false,
    validate: {
      params: this.validator.idParam,
      query: this.validator.queryParams,
    },
  });
}

export default NewsHandler;
