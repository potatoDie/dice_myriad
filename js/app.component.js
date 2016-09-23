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
var core_2 = require('@angular/core');
var dice_man_component_1 = require('./dice-man.component');
// Parent interacts with child via ViewChild
// so it can update its own property total, based on childs value
var AppComponent = (function () {
    function AppComponent() {
        this.diceNumber = 1;
        this.maxDiceNumber = 32;
        this.rollCount = 0;
        this.total = 0;
    }
    AppComponent.prototype.roll = function () {
        var values = this.diceMan.roll();
        this.total += values.reduce(function (a, b) { return (a + b); });
        this.rollCount += this.diceNumber;
    };
    AppComponent.prototype.setDiceNr = function (value) {
        this.diceNumber = parseInt(value);
    };
    __decorate([
        core_2.ViewChild(dice_man_component_1.DiceManComponent), 
        __metadata('design:type', dice_man_component_1.DiceManComponent)
    ], AppComponent.prototype, "diceMan", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './assets/app.component.html',
            providers: [dice_man_component_1.DiceManComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map