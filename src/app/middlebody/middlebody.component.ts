import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middlebody',
  templateUrl: './middlebody.component.html',
  styleUrls: ['./middlebody.component.scss']
})
export class MiddlebodyComponent implements OnInit {
  mails: any;
  primarymails: any;
  promotionmails: any;
  socialmails: any;

  primaryURL: string = '';
  promotionsURL: string = '';
  socialURL: string = '';
  primaryactive: boolean = true;
  socialactive: boolean = false;
  promotionsactive: boolean = false;

  constructor(private http: HttpClient) { 
    let obs = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/primary");
    obs.subscribe((response) => {
      this.primarymails = response;
      this.mails = this.primarymails;
    });
    
    
    let obs1 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/promotions");
    obs1.subscribe((response) => this.promotionmails = response);

    let obs2 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/social");
    obs2.subscribe((response) => this.socialmails = response);
    // document.querySelector("promotion").style.visibility = none;
  }

  ngOnInit(): void {
  }

  getPrimaryMails():void {
    this.mails = this.primarymails;
    this.primaryactive = true;
    this.socialactive = false;
    this.promotionsactive = false;
  }
  getPromotionMails():void {
    this.mails = this.promotionmails;
    this.primaryactive = false;
    this.socialactive = false;
    this.promotionsactive = true;
  }
  getSocialMails():void {
    this.mails = this.socialmails;
    this.primaryactive = false;
    this.socialactive = true;
    this.promotionsactive = false;
  }
}
