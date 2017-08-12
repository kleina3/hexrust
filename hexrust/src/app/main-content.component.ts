import { Component} from '@angular/core';

import { DataService } from './data.service';

import { Card } from './content-card/card';

@Component({
	selector: 'main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
	constructor(private dataService: DataService) { }
}