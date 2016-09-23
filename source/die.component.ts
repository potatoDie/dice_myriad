import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from './random-number.service';

@Component({
  selector: 'my-die',
  providers: [RandomNumberService],
  templateUrl: './assets/die.component.html',
  styleUrls: ['./assets/die.component.css']
})
export class DieComponent implements OnInit { 
	value: number;
	visible: boolean = false;

	constructor(public randomNumberService: RandomNumberService) {}

	roll() {
		this.visible = false;
		this.value = this.randomNumberService.getNr(1, 6);
		setTimeout(() => {this.visible = true;}, 200);
	}

	ngOnInit() {
		this.roll();
	}
}