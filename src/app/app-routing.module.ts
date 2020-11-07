import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiddlebodyComponent } from './middlebody/middlebody.component';

const routes: Routes = [
  { path: '', component: MiddlebodyComponent },
  { path: 'starred', component: MiddlebodyComponent },
  { path: 'sent', component: MiddlebodyComponent },
  { path: 'trash', component: MiddlebodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
