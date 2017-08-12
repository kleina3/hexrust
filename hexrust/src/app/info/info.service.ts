import { Injectable } from '@angular/core';

import { Card } from './../content-card/card';
import { testCard } from './cards/test-card';
import { testCard2 } from './cards/test-card-2';

@Injectable()
export class InfoService {
	getJumboTitle() {
		return "Info Service Test";
	}
	getJumboCaption() {
		return "Info caption is working";
	}
	
	cards: Card[] = [testCard, testCard2];
	
	constructor() { }
}