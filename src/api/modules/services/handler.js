import ROLE from '../../../constants/role';
import ServiceController from './controller';
import ServiceValidator from './validator';

class ServiceHandler {
  constructor(server) {
    this.controller = new ServiceController();
    this.validator = new ServiceValidator();
    server.bind(this.controller);
  }

  addOne = () => ({
    tags: ['api', 'v1'],
    description: 'Add one service',
    notes: 'Add one service',
    handler: this.controller.createOne,
    auth: {
      strategy: 'jwt',
      scope: ROLE.OWNER,
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  getServiceOfBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Get all services of bussiness',
    notes: 'Get all services of bussiness',
    handler: this.controller.getServiceOfBussiness,
    auth: false,
    validate: {
      params: this.validator.idParam,
    },
  });
}

export default ServiceHandler;
