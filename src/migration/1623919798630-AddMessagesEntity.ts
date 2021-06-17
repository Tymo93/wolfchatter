import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddMessagesEntity1623919798630 implements MigrationInterface {
  name = 'AddMessagesEntity1623919798630'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `messages` (`id` int NOT NULL AUTO_INCREMENT, `user_name` varchar(255) NOT NULL, `message` varchar(255) NOT NULL, `date_created` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'ALTER TABLE `markers` CHANGE `location` `location` varchar(255) NOT NULL'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `markers` CHANGE `location` `location` varchar(255) NULL'
    )
    await queryRunner.query('DROP TABLE `messages`')
  }
}
