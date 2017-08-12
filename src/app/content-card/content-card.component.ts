import { Component, Input } from '@angular/core';

@Component({
	selector: 'content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent{
	@Input() cardTitle: string;
	@Input() cardTop: string;
	@Input() cardDate: string;
	@Input() cardAccordion;// [string, string][];
	
	public getDate(): Date {
		return new Date(this.cardDate);
	}
	public isNew(): Boolean {
		var now = new Date().getTime();
		//if the elapsed time between now and the date created is less than one week, return true
		if (now - this.getDate().getTime() < 604800000) {
			return true;
		}
		return false;
	}
	
	public hasAccordion(): Boolean {
		if (this.cardAccordion.length == 0) {
			return false;
		}
		return true;
	}
	
	constructor() { }

}