import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CadastrarTreinamentos1600545258733
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'treinamentos',
        columns: [
          {
            name: 'idfuncionario',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'idCurso',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'dataTreinamento',
            type: 'timestamp with time zone',
          },
          {
            name: 'VecimentoTreinamento',
            type: 'varchar',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'treinamentos',
      new TableForeignKey({
        columnNames: ['idfuncionario'],
        referencedColumnNames: ['idFuncionario'],
        referencedTableName: 'funcionarios',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'treinamentos',
      new TableForeignKey({
        columnNames: ['idcursos'],
        referencedColumnNames: ['idCursos'],
        referencedTableName: 'cursos',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('treinamentos');
  }
}
