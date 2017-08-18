import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GlobalSharedModule } from './global/global-shared.module';
import { HomepageModule } from './homepage/homepage.module';
import { InfoModule } from './info/info.module';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
	JumbotronComponent,
	NavbarComponent,
	PageNotFoundComponent,
  ],
  imports: [
	BrowserModule,
	HomepageModule,
	InfoModule,
	GlobalSharedModule,
	AppRoutingModule
  ],
  exports: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
