import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DiceManComponent } from './dice-man.component';

// Parent interacts with child via ViewChild
// so it can update its own property total, based on childs value

@Component({
  selector: 'my-app',
  templateUrl: './assets/app.component.html',
  providers: [DiceManComponent]
})
export class AppComponent { 

	diceNumber: number = 1;
	maxDiceNumber: number = 32;
	
	@ViewChild(DiceManComponent)
	private diceMan: DiceManComponent;

	rollCount: number = 0;
	total: number = 0;

	roll(){
		let values = this.diceMan.roll();
		this.total += values.reduce( (a, b) => (a + b) ); 

		this.rollCount += this.diceNumber;
	}

	setDiceNr(value: string){
		this.diceNumber = parseInt(value);
	}
}
