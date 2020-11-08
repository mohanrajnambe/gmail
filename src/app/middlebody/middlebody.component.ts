import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';


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
  inbox: boolean = true;
  shape: string = '';
  displayedColumns: string[] = [
    'checkbox',
    'starIcon',
    'sendername',
    // 'subject',
    'mailcontent',
    'date'
  ];

  constructor(private http: HttpClient,private route:Router,public searchserv: SearchService) { 
    let obs = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/primary");
    obs.subscribe((response) => {
      this.primarymails = response;
      this.mails = this.primarymails;
      this.shuffleArray(this.mails);
    });
    
    
    let obs1 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/promotions");
    obs1.subscribe((response) => this.promotionmails = response);

    let obs2 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/social");
    obs2.subscribe((response) => this.socialmails = response);
    // document.querySelector("promotion").style.visibility = none;
    this.inbox = (this.route.url === '/');
    // console.log(this.route.url);
    
    this.shape = 'star_border';
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
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

  toggle(): void {
    if (this.shape === 'star') this.shape = 'star_border';
    else this.shape = 'star';
  }
}
