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
var die_component_1 = require('./die.component');
// <h2>The dice manager</h2>
// <p>Will manage the hold/active status of a dice array (first just one, then 2, then array)</p>
// <p>Will pass values of dice to parent</p>
var DiceManComponent = (function () {
    function DiceManComponent() {
        this.iterable = []; // Need iterable to use with ngFor directive
    }
    // To get up to date with parent and child components use OnChanges and
    // AfterViewChecked resp.
    // These changes here originate from the parent (AppComponent) that governs
    // diceNumber. Without changes occurring
    // you'd use OnInit and AfterViewInit instead
    DiceManComponent.prototype.ngAfterViewChecked = function () {
        /**
         * viewChildren (magically) contains the child components
         * in the property _results.
         * So (re)define the array dice now
         */
        this.dice = this.viewChildren._results;
    };
    DiceManComponent.prototype.ngOnChanges = function (changes) {
        this.iterable = Array(changes.diceNumber.currentValue);
    };
    DiceManComponent.prototype.roll = function () {
        var values = [];
        this.dice.forEach(function (die) {
            die.roll();
            values.push(die.value);
        });
        return values;
    };
    __decorate([
        // Need iterable to use with ngFor directive
        core_2.Input(), 
        __metadata('design:type', Object)
    ], DiceManComponent.prototype, "diceNumber", void 0);
    __decorate([
        core_2.ViewChildren(die_component_1.DieComponent), 
        __metadata('design:type', Object)
    ], DiceManComponent.prototype, "viewChildren", void 0);
    DiceManComponent = __decorate([
        core_1.Component({
            selector: 'dice-man',
            template: "\n  \t<my-die  *ngFor=\"let i of iterable\"></my-die>\n  ",
            directives: [die_component_1.DieComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DiceManComponent);
    return DiceManComponent;
}());
exports.DiceManComponent = DiceManComponent;
//# sourceMappingURL=dice-man.component.js.map