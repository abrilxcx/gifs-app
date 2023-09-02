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

  searchTagService( tag: string ): void {

    if( tag.length === 0 ){
      alert('Write something... 🐳')
      return;
    }

    this._tagsHistory.unshift( tag );
  }

}
