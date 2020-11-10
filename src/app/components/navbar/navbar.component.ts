import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SideNavService } from '../services/side-nav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  entered: boolean = false;
  composepanel: Boolean = false;
  public minimize:Boolean = false;
  large: Boolean =false;
  constructor(public sidenavservice: SideNavService,public searchService:SearchService) {
    
  }
  ngOnInit(): void{
    this.activate('inbox');
  }

  closeCompose(){
    this.composepanel = false;
    this.large = false;
    this.minimize = false;
  }

  openCompose() {
    console.log(this.composepanel, "working");
    if(this.composepanel==true){
      this.closeCompose();
    }else{
      this.composepanel = true;
    }
  }

  maximizeComposePanel(){
    if(this.minimize==true && this.large==false){
      this.toggleComposePanel();
    }
    this.large = !this.large
    let myContainer = document.getElementById('enlarge') as HTMLElement;
    myContainer.innerHTML = this.large?"close_fullscreen":"open_in_full";
    // console.log(myContainer);
    console.log(this.large);
  }


  toggleComposePanel(){
    if(this.minimize==false && this.large==true){
      this.maximizeComposePanel();
    }
    this.minimize = !this.minimize;
    let myContainer = document.getElementById('minmax') as HTMLElement;
myContainer.innerHTML = this.minimize?"minimize":"maximize";

  }

  mouseEnter() {
    if (!this.entered && !this.sidenavservice.hideSideNav) {
      this.sidenavservice.toggleSideNav();
      this.entered = true;
    }
  }
  mouseLeave() {
    if (this.entered && this.sidenavservice.hideSideNav) {
      this.sidenavservice.toggleSideNav();
      this.entered = false;
    }
  }

  activate(item) {
    this.searchService.setText('');
    let list:any = document.getElementsByClassName("nav-item");
    for (let i = 0; i < list.length; ++i) {
      list[i].classList.remove('active');
      list[i].classList.remove('inboxactive');
    }
    document.getElementById(item).classList.add('active');  
    if (item == 'inbox') {
      document.getElementById(item).classList.add('inboxactive');  
      
    }
  }
}