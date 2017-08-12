import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassNamePipe } from './../class-name.pipe';
import { MainContentComponent } from './../main-content.component';
import { LeftSidebarComponent } from './../left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './../right-sidebar/right-sidebar.component';
import { ContentCardComponent } from './../content-card/content-card.component';
import { AccordionComponent } from './../content-card/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
	declarations: [ 
		ClassNamePipe,
		MainContentComponent,
		LeftSidebarComponent,
		RightSidebarComponent,
		ContentCardComponent,
		AccordionComponent
	],
  exports: [
		ClassNamePipe,
		MainContentComponent,
		LeftSidebarComponent,
		RightSidebarComponent,
		ContentCardComponent,
		AccordionComponent
		],
  providers: [
		ClassNamePipe,
		MainContentComponent,
		LeftSidebarComponent,
		RightSidebarComponent,
		ContentCardComponent,
		AccordionComponent
		]
})

export class GlobalSharedModule { }
