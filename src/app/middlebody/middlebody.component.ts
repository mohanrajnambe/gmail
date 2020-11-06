import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middlebody',
  templateUrl: './middlebody.component.html',
  styleUrls: ['./middlebody.component.scss']
})
export class MiddlebodyComponent implements OnInit {
  mails: any;
  constructor(private http: HttpClient) { 
    this.mails = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/promotions");
    console.log(this.mails);
  }

  ngOnInit(): void {
  }

}
