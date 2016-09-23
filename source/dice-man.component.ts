import { Component } from '@angular/core';
import { ViewChildren, AfterViewChecked, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';
import { DieComponent } from './die.component';

  	// <h2>The dice manager</h2>
  	// <p>Will manage the hold/active status of a dice array (first just one, then 2, then array)</p>
  	// <p>Will pass values of dice to parent</p>
  	
@Component({
  selector: 'dice-man',
  template: `
  	<my-die  *ngFor="let i of iterable"></my-die>
  `,
  directives: [DieComponent]
})
export class DiceManComponent implements AfterViewChecked, OnInit, OnChanges { 

	iterable = []; // Need iterable to use with ngFor directive

	// diceNumber is set by parent. We don't really use diceNumber locally, but we
	// need to declare it to get notified when the parent changes this variable
	@Input()
	diceNumber;

	dice: DieComponent[];

	// Communicate with the children via @ViewChildren
	@ViewChildren(DieComponent)
	viewChildren: QueryList<DieComponent>;

	// To get up to date with parent and child components use OnChanges and
	// AfterViewChecked resp.
	// These changes here originate from the parent (AppComponent) that governs
	// diceNumber. Without changes occurring
	// you'd use OnInit and AfterViewInit instead

	ngAfterViewChecked(){
		/**
		 * viewChildren (magically) contains the child components
		 * in the property _results.
		 * So (re)define the array dice now
		 */
		this.dice = this.viewChildren._results;
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		this.iterable = Array(changes.diceNumber.currentValue);
	}
	
	roll(){
		let values = [];

		this.dice.forEach(function(die){
			die.roll();
			values.push(die.value);
		});

		return values;
	}
}
