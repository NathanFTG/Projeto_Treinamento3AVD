import { getRepository } from 'typeorm';

import Funcionarios from '../models/Funcionarios';

interface Request {
  NomeFuncionario: string;
  email: string;
}
class funcionarioControllers {
  public async store({
    NomeFuncionario,
    email,
  }: Request): Promise<Funcionarios> {
    const funcionariosRepository = getRepository(Funcionarios);

    const verificaFuncionarioExiste = await funcionariosRepository.findOne({
      where: { NomeFuncionario },
    });
    if (verificaFuncionarioExiste) {
      throw new Error('Funcionario ja Cadastrado');
    }

    const user = funcionariosRepository.create({
      NomeFuncionario,
      email,
    });

    await funcionariosRepository.save(user);
    return user;
  }
}
export default funcionarioControllers;
