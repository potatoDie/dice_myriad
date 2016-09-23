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
var core_1 = require('@angular/core');
var random_number_service_1 = require('./random-number.service');
var DieComponent = (function () {
    function DieComponent(randomNumberService) {
        this.randomNumberService = randomNumberService;
        this.visible = false;
    }
    DieComponent.prototype.roll = function () {
        var _this = this;
        this.visible = false;
        this.value = this.randomNumberService.getNr(1, 6);
        setTimeout(function () { _this.visible = true; }, 200);
    };
    DieComponent.prototype.ngOnInit = function () {
        this.roll();
    };
    DieComponent = __decorate([
        core_1.Component({
            selector: 'my-die',
            providers: [random_number_service_1.RandomNumberService],
            templateUrl: './assets/die.component.html',
            styleUrls: ['./assets/die.component.css']
        }), 
        __metadata('design:paramtypes', [random_number_service_1.RandomNumberService])
    ], DieComponent);
    return DieComponent;
}());
exports.DieComponent = DieComponent;
//# sourceMappingURL=die.component.js.map