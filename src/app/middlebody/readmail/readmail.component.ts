import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailserviceService } from '../mailservice.service';

@Component({
  selector: 'app-readmail',
  templateUrl: './readmail.component.html',
  styleUrls: ['./readmail.component.scss']
})
export class ReadmailComponent implements OnInit {
  currentMails: any;
  mailID;
  singleMail;
  constructor(private route: ActivatedRoute, private router: Router,private mailService: MailserviceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mailID = params.mailID;
      this.currentMails = this.mailService.getMails();
      this.filteredMail();
    })
  }

  filteredMail() {
    this.singleMail = this.currentMails.find(mail => {
      if (mail.id == this.mailID) {
        return mail;
       }
    })
    console.log(this.singleMail);
  }
}
