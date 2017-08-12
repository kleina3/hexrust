import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';

@Component({
  selector: 'right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

	constructor(private dataService: DataService) {}

	ngOnInit() {
	}
	
	
	/*
	private getDays(): string {
		if (this.days == 1) {
			return '1 day';
		}
		else {
			return this.days + ' days';
		}
	}
	
	private getMinutes(): string {
		if (this.days == 1) {
			return '1 day';
		}
		else {
			return this.days + ' days';
		}
	}
	
	private getSeconds(): string {
		if (this.days == 1) {
			return '1 day';
		}
		else {
			return this.days + ' days';
		}
	}*/
}
