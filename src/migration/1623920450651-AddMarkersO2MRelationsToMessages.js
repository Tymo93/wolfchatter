"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMarkersO2MRelationsToMessages1623920450651 = void 0;
class AddMarkersO2MRelationsToMessages1623920450651 {
    constructor() {
        this.name = 'AddMarkersO2MRelationsToMessages1623920450651';
    }
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `messages` ADD `markerId` int NULL');
        await queryRunner.query('ALTER TABLE `messages` ADD CONSTRAINT `FK_1baef42876db2e737088bffa595` FOREIGN KEY (`markerId`) REFERENCES `markers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `messages` DROP FOREIGN KEY `FK_1baef42876db2e737088bffa595`');
        await queryRunner.query('ALTER TABLE `messages` DROP COLUMN `markerId`');
    }
}
exports.AddMarkersO2MRelationsToMessages1623920450651 = AddMarkersO2MRelationsToMessages1623920450651;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyMzkyMDQ1MDY1MS1BZGRNYXJrZXJzTzJNUmVsYXRpb25zVG9NZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjE2MjM5MjA0NTA2NTEtQWRkTWFya2Vyc08yTVJlbGF0aW9uc1RvTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSw2Q0FBNkM7SUFBMUQ7UUFHRSxTQUFJLEdBQUcsK0NBQStDLENBQUE7SUFleEQsQ0FBQztJQWJRLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7UUFDekUsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQixnS0FBZ0ssQ0FDakssQ0FBQTtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3hDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsMEVBQTBFLENBQzNFLENBQUE7UUFDRCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0NBQ0Y7QUFsQkQsc0dBa0JDIn0=