import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.put('/user', UserController.update);

export default routes;