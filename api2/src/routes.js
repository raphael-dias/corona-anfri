import { Router } from 'express';

import CamboriuController from './app/controllers/CamboriuController';
import BalnearioController from './app/controllers/BalnearioController';
import ItajaiController from './app/controllers/ItajaiController';

const routes = new Router();

routes.get('/4203204', CamboriuController.index);
routes.get('/4202008', BalnearioController.index);
routes.get('/4208203', ItajaiController.index);

export default routes;
