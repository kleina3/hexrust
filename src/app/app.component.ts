import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
	title:string = 'my-app';
	jumboTitle;
	jumboCaption;

	constructor(private dataService:DataService) {
		//this.jumboTitle = dataService.getJumboTitle();
		//this.jumboCaption = dataService.getJumboCaption();
	}
	

	
	ngOnInit() {
		//this.jumboTitle = this.dataService.jumboTitle();
		//this.jumboCaption = this.dataService.jumboCaption();
	}
}