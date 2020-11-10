import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {
  currentMails: any;
  constructor() { }

  setMails(originalMails) {
    this.currentMails = originalMails;
  }

  getMails() {
    return this.currentMails;
  }
}
