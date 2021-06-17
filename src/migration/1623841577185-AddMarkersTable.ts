import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddMarkersTable1623841577185 implements MigrationInterface {
  name = 'AddMarkersTable1623841577185'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `markers` (`id` int NOT NULL AUTO_INCREMENT, `location` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `markers`')
  }
}
