import ROLE from '../../../constants/role';
import ReviewController from './controller';
import ReviewValidator from './validator';

class ReviewHandler {
  constructor(server) {
    this.controller = new ReviewController();
    this.validator = new ReviewValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one review',
    notes: 'Add one review',
    handler: this.controller.createReview,
    auth: {
      strategy: 'jwt',
      scope: ROLE.USER,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all reviews',
    notes: 'Get all reviews',
    handler: this.controller.getMany,
    auth: false,
    validate: {
      query: this.validator.queryParams,
    },
  });

  getReviewOfBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Get all reviews of bussiness',
    notes: 'Get all reviews of bussiness',
    handler: this.controller.getReviewOfBussiness,
    auth: false,
    validate: {
      params: this.validator.idParam,
      query: this.validator.queryParams,
    },
  });
}

export default ReviewHandler;
