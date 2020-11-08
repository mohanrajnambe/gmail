import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/components/services/side-nav.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: string = this.searchserv.getText();
  constructor(public sidenavservice: SideNavService,public searchserv: SearchService) { }

  ngOnInit(): void {
  }
  
  focus() {
    document.querySelector('.tb-search').classList.add('focused');
  }

  focusout()  {
    
    document.querySelector('.tb-search').classList.remove('focused');
  }

  newSearch(){ 
    this.searchserv.setText(this.searchText);
    if(this.searchText.length>0){
      this.searchserv.startSearch();
    }
  
  }

  currentText(){
    console.log('b4',this.searchText);
    this.searchserv.setText(this.searchText);
    if(this.searchText.length>0){
      this.searchserv.startSearch();
    }
    this.searchText = this.searchserv.getText();

    console.log('a4',this.searchText);

  }
  

}
