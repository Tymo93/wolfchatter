"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const markers_1 = require("./markers");
let Messages = class Messages {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Messages.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: false }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "user_name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: false }),
    tslib_1.__metadata("design:type", String)
], Messages.prototype, "message", void 0);
tslib_1.__decorate([
    typeorm_1.Column('timestamp', { nullable: false }),
    tslib_1.__metadata("design:type", Date)
], Messages.prototype, "date_created", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => markers_1.Markers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    tslib_1.__metadata("design:type", markers_1.Markers)
], Messages.prototype, "marker", void 0);
Messages = tslib_1.__decorate([
    typeorm_1.Entity()
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBQTJFO0FBQzNFLHVDQUFtQztBQUVuQyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0NBa0JwQixDQUFBO0FBaEJDO0lBREMsZ0NBQXNCLEVBQUU7O29DQUNmO0FBR1Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzsyQ0FDWDtBQUdqQjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O3lDQUNiO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FDM0IsSUFBSTs4Q0FBQTtBQU1sQjtJQUpDLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRTtRQUN4QixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO3NDQUNNLGlCQUFPO3dDQUFBO0FBakJKLFFBQVE7SUFEcEIsZ0JBQU0sRUFBRTtHQUNJLFFBQVEsQ0FrQnBCO0FBbEJZLDRCQUFRIn0=