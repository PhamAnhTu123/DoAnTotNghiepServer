import ROLE from '../../../constants/role';
import OwnerController from './controller';
import OwnerValidator from './validator';

class OwnerHandler {
  constructor(server) {
    this.controller = new OwnerController();
    this.validator = new OwnerValidator();
    server.bind(this.controller);
  }

  getMany = () => ({
    tags: ['api', 'v1'],
    description: 'Get many owners',
    notes: 'Return many owners',
    handler: this.controller.getMany,
    auth: {
      strategy: 'jwt',
      scope: ROLE.ADMIN,
    },
    validate: {
      query: this.validator.queryParams,
    },
  });

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get one owner',
    notes: 'Return one owner',
    handler: this.controller.getOne,
    auth: {
      strategy: 'jwt',
    },
    validate: {
      params: this.validator.idParam,
    },
  });

  getMe = () => ({
    tags: ['api', 'v1'],
    description: 'Get owner profile',
    notes: 'Get owner profile',
    handler: this.controller.getMe,
    auth: {
      strategy: 'jwt',
    },
  });

  updateOne = () => ({
    tags: ['api', 'v1'],
    description: 'update one owner',
    notes: 'update one owner',
    handler: this.controller.updateOne,
    auth: {
      strategy: 'jwt',
      scope: [ROLE.OWNER, ROLE.ADMIN],
    },
    validate: {
      params: this.validator.idParam,
      payload: this.validator.payloadUpdateOne,
    },
  });
}

export default OwnerHandler;
