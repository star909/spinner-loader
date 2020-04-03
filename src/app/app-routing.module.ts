import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './modules/spinner/spinner.component';

const routes: Routes = [
  { path: '', component:SpinnerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }