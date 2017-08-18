import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'className'
})
export class ClassNamePipe implements PipeTransform {
	transform(value: string): string {
		let newPipe = new LowerCasePipe();
		let results = newPipe.transform(value)
		results = results.replace(/[^\w\s]/gi, '');
		return results.replace(new RegExp(" ", 'g'), "-");
	}
}