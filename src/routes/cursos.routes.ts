import { Router } from 'express';
import { getRepository } from 'typeorm';

import CursosController from '../app/controllers/CursosControllers';
import Cursos from '../app/models/Cursos';

const cursosRouter = Router();

cursosRouter.post('/', async (request, response) => {
  try {
    const { nomeCurso, cargaHoraria } = request.body;

    const cursosController = new CursosController();
    const user = await cursosController.store({
      nomeCurso,
      cargaHoraria,
    });
    return response.json(user);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});
cursosRouter.get('/', async (request, response) => {
  const cursosRepositorio = getRepository(Cursos);
  const user = await cursosRepositorio.find();
  console.log(user);
  return response.json(user);
});

cursosRouter.get('/:id', async (request, response) => {
  const cursosRepositorio = getRepository(Cursos);
  const { id } = request.params;
  const user = await cursosRepositorio.findOne(id);
  return response.json(user);
});
cursosRouter.delete('/:id', async (request, response) => {
  const cursosRepositorio = getRepository(Cursos);
  const { id } = request.params;
  const user = await cursosRepositorio.delete(id);
  return response.send(user);
});
export default cursosRouter;
