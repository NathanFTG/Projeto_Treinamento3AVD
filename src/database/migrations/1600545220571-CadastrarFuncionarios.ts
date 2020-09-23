import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CadastrarFuncionarios1600545220571
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'funcionarios',
        columns: [
          {
            name: 'idFuncionario',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'NomeFuncionario',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            // Criar foto do funcionario salvar
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('funcionarios');
  }
}
