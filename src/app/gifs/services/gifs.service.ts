import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gifs[]         = [];
  private _giphyApi: string       = 'Ck7X8SCuBaXlCnvSEXVn7ypeEsw8JOv';
  private _tagsHistory: string[]  = [];
  private _serviceUrl: string     = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistoryService(tag: string) {
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);

  }

  searchTagService( tag: string ): void {
    if( tag.length === 0 ){
      alert('Write something... 🐳')
      return;
    }

    this.organizeHistoryService( tag );

    const params = new HttpParams()
      .set('api_key', this._giphyApi)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this._serviceUrl}/search`, { params })
      .subscribe( resp => {
        this.gifsList = resp.data;
      })
  }

}
