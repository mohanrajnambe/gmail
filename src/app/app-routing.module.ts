import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { MiddlebodyComponent } from './middlebody/middlebody.component';
import { ReadmailComponent } from './middlebody/readmail/readmail.component';

const routes: Routes = [
  {path: '', redirectTo: '/inbox', pathMatch:'full'},
  { path: 'inbox', component: MiddlebodyComponent },
  { path: 'starred', component: MiddlebodyComponent },
  { path: 'sent', component: MiddlebodyComponent },
  { path: 'trash', component: MiddlebodyComponent },
  { path: 'message', component: ReadmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routerURL: string;
  routerURLTest: string;
  routerURLnew: string;
  constructor(router: Router, title: Title) {
    
    
    router.events.subscribe((event) => { //fires on every URL change
      this.routerURLTest = router.url;
      this.routerURLTest = this.routerURLTest.slice(1);
      this.routerURLTest = this.routerURLTest.charAt(0).toLocaleUpperCase()+this.routerURLTest.slice(1);
       title.setTitle(this.routerURLTest);
    });
 }
}
