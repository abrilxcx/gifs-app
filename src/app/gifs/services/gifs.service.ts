const GIPHY_API_KEY = 'Ck7X8SCuBaXlCnvSEXVn7ypeEsw8JOvo';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistoryService(tag: string) {
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );

    // if( this._tagsHistory.length > 10 ) {
    //   this._tagsHistory.pop();
    // }

    this._tagsHistory = this._tagsHistory.splice(0, 10);

  }

  searchTagService( tag: string ): void {

    if( tag.length === 0 ){
      alert('Write something... 🐳')
      return;
    }

    this.organizeHistoryService( tag );

  }

}
