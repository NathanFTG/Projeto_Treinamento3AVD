import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cursos')
class Cursos {
  @PrimaryGeneratedColumn('uuid')
  idCurso: string;

  @Column()
  nomeCurso: string;

  @Column()
  cargaHoraria: string;
}
export default Cursos;
