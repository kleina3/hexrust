import { Component } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent {

	constructor(private dataService: DataService) { }
	
	cards = this.dataService.cards;
}