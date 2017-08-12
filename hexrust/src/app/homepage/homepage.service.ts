import { Injectable } from '@angular/core';

import { Card } from './../content-card/card';
import { testCard } from './cards/test-card';
import { testCard2 } from './cards/test-card-2';

@Injectable()
export class HomepageService {
	getJumboTitle() {
		return "Homepage Service Test";
	}
	getJumboCaption() {
		return "Homepage caption is working";
	}
	
	cards: Card[] = [testCard, testCard2];
	
	constructor() { }
}