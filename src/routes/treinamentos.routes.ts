import { Router } from 'express';
import { getRepository } from 'typeorm';

import TreinamentosControllers from '../app/controllers/TreinamentosControllers';
import Treinamento from '../app/models/Treinamentos';

const treinamentosRouter = Router();

treinamentosRouter.post('/', async (request, response) => {
  try {
    const {
      dataTreinamento,
      VecimentoTreinamento,
      idfuncionario,
      idCurso,
    } = request.body;

    const treinamentosController = new TreinamentosControllers();
    const user = await treinamentosController.store({
      idfuncionario,
      idCurso,
      dataTreinamento,
      VecimentoTreinamento,
    });
    return response.json(user);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

treinamentosRouter.get('/', async (request, response) => {
  const treinamentoRepositorio = getRepository(Treinamento);
  const user = await treinamentoRepositorio.find();
  console.log(user);
  return response.json(user);
});

treinamentosRouter.get('/:id', async (request, response) => {
  const treinamentoRepositorio = getRepository(Treinamento);
  const { id } = request.params;
  const user = await treinamentoRepositorio.findOne(id);
  return response.json(user);
});

treinamentosRouter.delete('/:id', async (request, response) => {
  const treinamentoRepositorio = getRepository(Treinamento);
  const { id } = request.params;
  const user = await treinamentoRepositorio.delete(id);
  return response.send(user);
});

export default treinamentosRouter;
