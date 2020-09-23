import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('funcionarios')
class Funcionarios {
  @PrimaryGeneratedColumn('uuid')
  idFuncionario: string;

  @Column()
  NomeFuncionario: string;

  @Column()
  Foto: string;

  @Column()
  email: string;
}

export default Funcionarios;
