import ROLE from '../../../constants/role';
import BussinessController from './controller';
import BussinessValidator from './validator';

class CategoryHandler {
  constructor(server) {
    this.controller = new BussinessController();
    this.validator = new BussinessValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one bussiness',
    notes: 'Add one bussiness',
    handler: this.controller.createOne,
    auth: {
      strategy: 'jwt',
      scope: ROLE.OWNER,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get one bussiness',
    notes: 'Get one bussiness',
    handler: this.controller.findOne,
    auth: false,
    validate: {
      params: this.validator.idParam,
    },
  });

  getOwnerBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Get owner bussiness',
    notes: 'Get owner bussiness',
    handler: this.controller.getOwnerBussiness,
    auth: {
      strategy: 'jwt',
      scope: ROLE.OWNER,
    },
  });

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get all bussiness',
    notes: 'Get all bussiness',
    handler: this.controller.getAllBussiness,
    auth: false,
    validate: {
      query: this.validator.queryBussiness,
    },
  });

  submitBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Submit bussiness',
    notes: 'Submit bussiness',
    handler: this.controller.submitBussiness,
    auth: {
      strategy: 'jwt',
      scope: ROLE.ADMIN,
    },
    validate: {
      params: this.validator.paramsSubmit,
    },
  });
}

export default CategoryHandler;
