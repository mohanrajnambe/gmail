import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search :boolean = false;
  constructor() { }

  startSearch(){
    console.log(this.search);
    this.search = !this.search;
  }
}
