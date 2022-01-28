/* eslint-disable import/prefer-default-export */
import _flattenDeep from 'lodash/flattenDeep';
import AuthUserRoutes from './modules/auth/users/routes';
import AuthOwnerRoutes from './modules/auth/owners/routes';
import AuthAdminRoutes from './modules/auth/admins/routes';
import UserRoutes from './modules/users/routes';
import OwnerRoutes from './modules/owners/routes';
import CityRoutes from './modules/citites/routes';
import CategoryRoutes from './modules/categories/routes';
import BussinessRoutes from './modules/bussinesses/routes';
import ServiceRoutes from './modules/services/routes';
import ReviewRoutes from './modules/reviews/routes';
import NewsRoutes from './modules/news/routes';
import CollectionRoutes from './modules/collections/routes';

export const bind = (server) => {
  const routes = [
    new AuthOwnerRoutes(server),
    new AuthUserRoutes(server),
    new AuthAdminRoutes(server),
    new UserRoutes(server),
    new OwnerRoutes(server),
    new CityRoutes(server),
    new CategoryRoutes(server),
    new BussinessRoutes(server),
    new ServiceRoutes(server),
    new ReviewRoutes(server),
    new NewsRoutes(server),
    new CollectionRoutes(server),
  ];
  return _flattenDeep(routes);
};
