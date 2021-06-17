"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMessagesEntity1623919798630 = void 0;
class AddMessagesEntity1623919798630 {
    constructor() {
        this.name = 'AddMessagesEntity1623919798630';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `messages` (`id` int NOT NULL AUTO_INCREMENT, `user_name` varchar(255) NOT NULL, `message` varchar(255) NOT NULL, `date_created` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('ALTER TABLE `markers` CHANGE `location` `location` varchar(255) NOT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `markers` CHANGE `location` `location` varchar(255) NULL');
        await queryRunner.query('DROP TABLE `messages`');
    }
}
exports.AddMessagesEntity1623919798630 = AddMessagesEntity1623919798630;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyMzkxOTc5ODYzMC1BZGRNZXNzYWdlc0VudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjE2MjM5MTk3OTg2MzAtQWRkTWVzc2FnZXNFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSw4QkFBOEI7SUFBM0M7UUFDRSxTQUFJLEdBQUcsZ0NBQWdDLENBQUE7SUFpQnpDLENBQUM7SUFmUSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIscU1BQXFNLENBQ3RNLENBQUE7UUFDRCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLDBFQUEwRSxDQUMzRSxDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDeEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQixzRUFBc0UsQ0FDdkUsQ0FBQTtRQUNELE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Q0FDRjtBQWxCRCx3RUFrQkMifQ==