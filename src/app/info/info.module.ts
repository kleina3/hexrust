import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSharedModule } from './../global/global-shared.module';

import { InfoService } from './info.service';
import { InfoComponent } from './info.component';

import { InfoRoutingModule } from './info-routing.module';

@NgModule({
	imports: [
		CommonModule,
		GlobalSharedModule,
		InfoRoutingModule
	],
  
	declarations: [
		InfoComponent,
	],
	exports: [
		InfoComponent
	],
  
	providers: [InfoService]
})
export class InfoModule { }
