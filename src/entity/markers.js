"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markers = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const messages_1 = require("./messages");
let Markers = class Markers {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Markers.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: false }),
    tslib_1.__metadata("design:type", String)
], Markers.prototype, "location", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => messages_1.Messages, (message) => message.marker, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Markers.prototype, "messages", void 0);
Markers = tslib_1.__decorate([
    typeorm_1.Entity()
], Markers);
exports.Markers = Markers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Vycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUEyRTtBQUMzRSx5Q0FBcUM7QUFFckMsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztDQVduQixDQUFBO0FBVEM7SUFEQyxnQ0FBc0IsRUFBRTs7bUNBQ2Y7QUFHVjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O3lDQUNaO0FBS2hCO0lBSEMsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ3RELFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7eUNBQ2tCO0FBVlQsT0FBTztJQURuQixnQkFBTSxFQUFFO0dBQ0ksT0FBTyxDQVduQjtBQVhZLDBCQUFPIn0=