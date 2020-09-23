import { Router } from 'express';

import cursosRouter from './cursos.routes';
import funcionariosRouter from './funcionarios.routes';
import treinamentosRouter from './treinamentos.routes';

const routes = Router();

routes.use('/cursos', cursosRouter);
routes.use('/funcionarios', funcionariosRouter);
routes.use('/treinamentos', treinamentosRouter);

export default routes;
