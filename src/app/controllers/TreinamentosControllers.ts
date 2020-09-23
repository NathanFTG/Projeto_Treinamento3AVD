import { getRepository } from 'typeorm';

import Treinamentos from '../models/Treinamentos';

interface Request {
  idfuncionario: string;
  idCurso: string;
  dataTreinamento: Date;
  VecimentoTreinamento: string;
}
class TreinamentosControllers {
  public async store({
    idfuncionario,
    idCurso,
    dataTreinamento,
    VecimentoTreinamento,
  }: Request): Promise<Treinamentos> {
    const treinamentosRepository = getRepository(Treinamentos);

    const user = treinamentosRepository.create({
      idfuncionario,
      idCurso,
      dataTreinamento,
      VecimentoTreinamento,
    });

    await treinamentosRepository.save(user);
    return user;
  }
}
export default TreinamentosControllers;
