import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('nmbTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag() {

    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });

    this.tagInput.nativeElement.value = '';


  }

}
