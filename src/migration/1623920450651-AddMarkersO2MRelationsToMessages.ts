import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddMarkersO2MRelationsToMessages1623920450651
  implements MigrationInterface
{
  name = 'AddMarkersO2MRelationsToMessages1623920450651'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `messages` ADD `markerId` int NULL')
    await queryRunner.query(
      'ALTER TABLE `messages` ADD CONSTRAINT `FK_1baef42876db2e737088bffa595` FOREIGN KEY (`markerId`) REFERENCES `markers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `messages` DROP FOREIGN KEY `FK_1baef42876db2e737088bffa595`'
    )
    await queryRunner.query('ALTER TABLE `messages` DROP COLUMN `markerId`')
  }
}
