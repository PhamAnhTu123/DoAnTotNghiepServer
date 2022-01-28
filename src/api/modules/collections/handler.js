import CollectionController from './controller';
import CollectionValidator from './validator';

class CollectionHandler {
  constructor(server) {
    this.controller = new CollectionController();
    this.validator = new CollectionValidator();
    server.bind(this.controller);
  }

  createCollection = () => ({
    tags: ['api', 'v1'],
    description: 'Add one collection',
    notes: 'Add one collection',
    handler: this.controller.createCollection,
    auth: {
      strategy: 'jwt',
    },
    validate: {
      payload: this.validator.createOne,
    },
  });

  addBussiness = () => ({
    tags: ['api', 'v1'],
    description: 'Add one bussiness',
    notes: 'Add one bussiness',
    handler: this.controller.addBussiness,
    auth: {
      strategy: 'jwt',
    },
    validate: {
      params: this.validator.idParam,
      payload: this.validator.addBussiness,
    },
  });

  getCollectionOfUser = () => ({
    tags: ['api', 'v1'],
    description: 'Get all collections of user',
    notes: 'Get all collections of user',
    handler: this.controller.getCollectionOfUser,
    auth: {
      strategy: 'jwt',
    },
  });

  getOne = () => ({
    tags: ['api', 'v1'],
    description: 'Get all collections of user',
    notes: 'Get all collections of user',
    handler: this.controller.getOneCollection,
    auth: {
      strategy: 'jwt',
    },
    validate: {
      params: this.validator.idParam,
    },
  });
}

export default CollectionHandler;
