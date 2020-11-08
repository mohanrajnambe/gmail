import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/components/services/side-nav.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sidenavservice: SideNavService,public searchserv: SearchService) { }

  ngOnInit(): void {
  }
  
  focus() {
    document.querySelector('.tb-search').classList.add('focused');
  }

  focusout()  {
    
    document.querySelector('.tb-search').classList.remove('focused');
  }

}
