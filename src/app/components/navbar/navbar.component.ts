import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public sidenavservice: SideNavService) { }

  ngOnInit(): void {
  }

}
