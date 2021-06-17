"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMarkersTable1623841577185 = void 0;
class AddMarkersTable1623841577185 {
    constructor() {
        this.name = 'AddMarkersTable1623841577185';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `markers` (`id` int NOT NULL AUTO_INCREMENT, `location` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `markers`');
    }
}
exports.AddMarkersTable1623841577185 = AddMarkersTable1623841577185;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyMzg0MTU3NzE4NS1BZGRNYXJrZXJzVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIxNjIzODQxNTc3MTg1LUFkZE1hcmtlcnNUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLDRCQUE0QjtJQUF6QztRQUNFLFNBQUksR0FBRyw4QkFBOEIsQ0FBQTtJQVd2QyxDQUFDO0lBVFEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLDJIQUEySCxDQUM1SCxDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDeEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDakQsQ0FBQztDQUNGO0FBWkQsb0VBWUMifQ==