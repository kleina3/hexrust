import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
	jumboTitle = "component test";
	jumboCaption = "caption test";
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
