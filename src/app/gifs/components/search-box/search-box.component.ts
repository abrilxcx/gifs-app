import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search gifs..."
      #txtTagInput
      (keyup.enter)="searchTagSearchBox()"
    >

  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  searchTagSearchBox() {

    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTagService( newTag );

    this.tagInput.nativeElement.value = '';
  }
}
