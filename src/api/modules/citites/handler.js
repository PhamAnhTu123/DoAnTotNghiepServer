import ROLE from '../../../constants/role';
import CityController from './controller';
import CityValidator from './validator';

class CityHandler {
  constructor(server) {
    this.controller = new CityController();
    this.validator = new CityValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one city',
    notes: 'Add one city',
    handler: this.controller.createOne,
    auth: {
      strategy: 'jwt',
      scope: ROLE.ADMIN,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all cities',
    notes: 'Get all cities',
    handler: this.controller.getMany,
    auth: false,
    validate: {
      query: this.validator.queryParams,
    },
  });
}

export default CityHandler;
