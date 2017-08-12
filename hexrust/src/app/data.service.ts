import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { HomepageService } from './homepage/homepage.service';
import { InfoService } from './info/info.service';

import {Card} from './content-card/card'

@Injectable()
export class DataService {
	
	private currentRoute;
	private currentService = "";
	//private finished = false;
	
	public jumboTitle = "Placeholder";
	public jumboCaption = "placeholder";
	
	
	constructor(
		private homepageService: HomepageService,
		private infoService: InfoService,
		private router: Router,
		private route : ActivatedRoute	
		) {
			router.events.subscribe(url => {
				//console.log("url type", typeof url);
				if (url instanceof NavigationEnd) {
					this.currentRoute = url;
					if (this.currentRoute.urlAfterRedirects != undefined){
						console.log("redirect", this.currentRoute.urlAfterRedirects.substring(1)); //this is it
						this.currentService = this.currentRoute.urlAfterRedirects;
					}
					else {
						console.log("url", this.currentRoute.url.substring(1));
						this.currentService = this.currentRoute.url;
					}
					this.currentService = this.currentService.substring(1);
					this.getJumboTitle();
					this.getJumboCaption();
					this.getCards();
				}
		});
	}
	
	public cards = this.homepageService.cards;
	
	public getCurrentService() {
		console.log("service: ", eval('this.' + this.currentService + 'Service'))
		return eval('this.' + this.currentService + 'Service');
	}
  
	getJumboTitle(): void {
		if (this.getCurrentService() == undefined) {
			this.jumboTitle = "Unknown Page";
		}
		else {
			//console.log("Getting title");
			this.jumboTitle = this.getCurrentService().getJumboTitle();
		}
	}
	getJumboCaption(): void {
		if (this.getCurrentService() == undefined) {
			this.jumboCaption = "";
		}
		else {
			//console.log("Getting caption");
			this.jumboCaption = this.getCurrentService().getJumboCaption();
		}
	}
	
	getCards(): void {
		if (this.getCurrentService() == undefined) {
			this.cards = null;
		}
		else {
			console.log("Getting cards from", this.currentService);
			this.cards = this.getCurrentService().cards;
		}
	}
}