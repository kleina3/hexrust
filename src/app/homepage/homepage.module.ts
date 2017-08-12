import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSharedModule } from './../global/global-shared.module';

import { HomepageService } from './homepage.service';
import { HomepageComponent } from './homepage.component';

import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
	imports: [
		CommonModule,
		GlobalSharedModule,
		HomepageRoutingModule
	],
  
	declarations: [
		
		HomepageComponent,

	],
	exports: [
		HomepageComponent
	],
  
	providers: [HomepageService]
})
export class HomepageModule { }
