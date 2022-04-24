"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CreateUsuarioDto = class CreateUsuarioDto {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 10),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "Nombres", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "Apellidos", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(99999999),
    (0, class_validator_1.Min)(100000),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "Clave", void 0);
CreateUsuarioDto = __decorate([
    (0, class_transformer_1.Exclude)()
], CreateUsuarioDto);
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-form.dto.js.map