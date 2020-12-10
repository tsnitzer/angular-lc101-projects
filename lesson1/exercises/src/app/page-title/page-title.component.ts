import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  title: string = "Will the neighbor's dog ever stop barking?";

  constructor() { }

  ngOnInit() {
  }

}
