import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { MailserviceService } from './mailservice.service';


@Component({
  selector: 'app-middlebody',
  templateUrl: './middlebody.component.html',
  styleUrls: ['./middlebody.component.scss']
})
export class MiddlebodyComponent implements OnInit {


  
  mails: any = [];
  primarymails: any = [];
  promotionmails: any = [];
  socialmails: any = [];

  primaryURL: string = '';
  promotionsURL: string = '';
  socialURL: string = '';
  primaryactive: boolean = true;
  socialactive: boolean = false;
  promotionsactive: boolean = false;
  inbox: boolean = true;
  shape: string = '';
  filteredvalue = false;
  displayedColumns: string[] = [
    'checkbox',
    'starIcon',
    'sendername',
    // 'subject',
    'mailcontent',
    'date'
  ];
  allChecked: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  searchText: string;
  originalmails: any = [];


  
  constructor(private http: HttpClient, private route: Router, public searchserv: SearchService, private _snackBar: MatSnackBar,private mailService: MailserviceService) { 
    
    let obs = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/primary");
    obs.subscribe((response) => {
      this.primarymails = response;
      this.addFields(this.primarymails);
      this.mails = this.primarymails;
      this.shuffleArray(this.mails);
      this.originalmails = JSON.parse(JSON.stringify(this.mails));
      mailService.setMails(this.originalmails);
    });
    
    
    let obs1 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/promotions");
    obs1.subscribe((response) => {
      this.promotionmails = response;
      this.addFields(this.promotionmails);
    });

    let obs2 = this.http.get("https://5fa4f5bf732de900162e88cb.mockapi.io/emails/social");
    obs2.subscribe((response) => {
      this.socialmails = response;
      this.addFields(this.socialmails);
    });
    // document.querySelector("promotion").style.visibility = none;
    this.inbox = (this.route.url === '/inbox');
    console.log(this.route.url);
    
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
  addFields(currentmails) {
    for (var i = 0; i < currentmails.length; i++) {
      currentmails[i].shape = "star_border";
      currentmails[i].read = false;
      currentmails[i].checked = false;
    }
  }
  getPrimaryMails():void {
    this.mails = this.primarymails;
    this.originalmails = JSON.parse(JSON.stringify(this.mails));
    this.primaryactive = true;
    this.socialactive = false;
    this.promotionsactive = false;
    this.mailService.setMails(this.originalmails);
  }
  getPromotionMails():void {
    this.mails = this.promotionmails;
    this.originalmails = JSON.parse(JSON.stringify(this.mails));
    this.primaryactive = false;
    this.socialactive = false;
    this.promotionsactive = true;
    this.mailService.setMails(this.originalmails);
  }
  getSocialMails():void {
    this.mails = this.socialmails;
    this.originalmails = JSON.parse(JSON.stringify(this.mails));
    this.primaryactive = false;
    this.socialactive = true;
    this.promotionsactive = false;
    this.mailService.setMails(this.originalmails);
  }

  filterfunction(){
    this.searchText = this.searchserv.getText();
    this.mails = this.originalmails.filter(res => {
      return res.sendername.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
    })

    // if()
    console.log(this.mails.length);
  }
  openSnackBar() {
    this._snackBar.open('Loading...', '', {
      duration: 1700,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  updateAllChecks() {
    this.allChecked = (this.mails.every(t => t.checked));
  }

  someChecked() : boolean {
    var count = 0;
    this.mails.forEach(t => {
      if (t.checked) count++;
    });

    return count > 0 && !this.allChecked;
  }

  setAll(checked: boolean) {
    this.allChecked = checked;
    this.mails.forEach(t => t.checked = checked);
  }
  load(mail) {
    console.log("Hello");
    mail.read = true;
    console.log(mail);

    // this.route.navigate(['/message']);
  }

}
