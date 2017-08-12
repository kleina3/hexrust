import { Component, Input } from '@angular/core';

import { ClassNamePipe } from './../../class-name.pipe'

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
	@Input() myParent: string;
	@Input() title: string;
	@Input() content: string;
	//@Input() dataparent: string;
	//@Input() ariacontrols: string;

	constructor(private classNamePipe: ClassNamePipe) { }

		public getTitleClass(): string {
		//var result = {this.title | className};
		return this.classNamePipe.transform(this.title);
	}
}
