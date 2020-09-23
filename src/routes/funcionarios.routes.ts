import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import FuncionarioController from '../app/controllers/FuncionarioControllers';
import Funcionario from '../app/models/Funcionarios';
import uploadConfig from '../config/upload';

const funcionariosRouter = Router();
const upload = multer(uploadConfig);

funcionariosRouter.post(
  '/',
  upload.single('Foto'),
  async (request, response) => {
    try {
      const { NomeFuncionario, email } = request.body;
      const funcionariosController = new FuncionarioController();
      const user = await funcionariosController.store({
        NomeFuncionario,
        email,
      });
      return response.json(user);
    } catch (erro) {
      return response.status(400).json({ error: erro.message });
    }
  }
);

funcionariosRouter.get('/', async (request, response) => {
  const funcionarioRepositorio = getRepository(Funcionario);
  const user = await funcionarioRepositorio.find();
  console.log(user);
  return response.json(user);
});

funcionariosRouter.get('/:id', async (request, response) => {
  const funcionarioRepositorio = getRepository(Funcionario);
  const { id } = request.params;
  const user = await funcionarioRepositorio.findOne(id);
  return response.json(user);
});
funcionariosRouter.delete('/:id', async (request, response) => {
  const funcionarioRepositorio = getRepository(Funcionario);
  const { id } = request.params;
  const user = await funcionarioRepositorio.delete(id);
  return response.send(user);
});

funcionariosRouter.patch(
  'Foto',
  upload.single('Foto'),
  async (request, response) => {
    return response.json({ ok: true });
  }
);

export default funcionariosRouter;
