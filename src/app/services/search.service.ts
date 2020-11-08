import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search :boolean = false;
  searchText: string;
  // originalMail: any;
  constructor() { }

  // getOriginalMail(){
  //   return this.originalMail
  // }
  setText(text){
    this.searchText = text; 
  }
  getText(){
    return this.searchText;
  }
  startSearch(){
    console.log(this.search);
    this.search = !this.search;
  }
}
