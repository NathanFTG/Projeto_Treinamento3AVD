import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFotoFuncionarios1600785554382
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'funcionarios',
      new TableColumn({
        name: 'Foto',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('funcionario', 'Foto');
  }
}
