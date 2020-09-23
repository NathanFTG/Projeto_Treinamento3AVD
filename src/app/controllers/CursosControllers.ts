import { getRepository } from 'typeorm';

import Cursos from '../models/Cursos';

interface Request {
  nomeCurso: string;
  cargaHoraria: string;
}
class CursosControllers {
  public async store({ nomeCurso, cargaHoraria }: Request): Promise<Cursos> {
    const cursosRepository = getRepository(Cursos);

    const verificaCursoExiste = await cursosRepository.findOne({
      where: { nomeCurso },
    });
    if (verificaCursoExiste) {
      throw new Error('Curso ja Cadastrado');
    }

    const user = cursosRepository.create({
      nomeCurso,
      cargaHoraria,
    });

    await cursosRepository.save(user);
    return user;
  }
}
export default CursosControllers;
