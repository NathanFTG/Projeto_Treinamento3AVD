import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Funcionario from './Funcionarios';
import Cursos from './Cursos';

@Entity('treinamentos')
class Treinamentos {
  @PrimaryGeneratedColumn('uuid')
  idfuncionario: string;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'idfuncionario' })
  funcionario: Funcionario;

  @PrimaryGeneratedColumn('uuid')
  idCurso: string;

  @ManyToOne(() => Cursos)
  @JoinColumn({ name: 'idCurso' })
  curso: Cursos;

  @Column('timestap with time zone')
  dataTreinamento: Date;

  @Column()
  VecimentoTreinamento: string;
}

export default Treinamentos;
