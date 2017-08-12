import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
	{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
	
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
