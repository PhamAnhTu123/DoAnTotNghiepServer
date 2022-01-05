import ROLE from '../../../constants/role';
import CategoryController from './controller';
import CategoryValidator from './validator';

class CategoryHandler {
  constructor(server) {
    this.controller = new CategoryController();
    this.validator = new CategoryValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one category',
    notes: 'Add one category',
    handler: this.controller.createOne,
    auth: {
      strategy: 'jwt',
      scope: ROLE.ADMIN,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getAll = () => ({
    tags: ['api', 'v1'],
    description: 'Add one category',
    notes: 'Add one category',
    handler: this.controller.getMany,
    auth: false,
    validate: {
      query: this.validator.queryParams,
    },
  });
}

export default CategoryHandler;
