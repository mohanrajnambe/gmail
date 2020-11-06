import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  focus() {
    document.querySelector('.tb-search').classList.add('focused');
  }

  focusout()  {
    
    document.querySelector('.tb-search').classList.remove('focused');
  }

}
