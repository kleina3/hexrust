import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
	jumboTitle = "component test";
	jumboCaption = "caption test";
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
