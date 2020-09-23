import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CadastrarCursos1600545167418
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cursos',
        columns: [
          {
            name: 'idCurso',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nomeCurso',
            type: 'varchar',
          },
          {
            name: 'cargaHoraria',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cursos');
  }
}
