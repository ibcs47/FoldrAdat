import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component'
import { KatvalComponent } from './katval/katval.component'

const routes: Routes = [
  { path: '', redirectTo: '/katval', pathMatch: 'full' },
  { path: 'display/:kat', component:  DisplayComponent},
  { path: 'katval', component:  KatvalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
