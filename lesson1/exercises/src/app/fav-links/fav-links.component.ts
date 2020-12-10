import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  title: string = "Some favorite links.";
  favLinks: string[] = ['https://www.them.us/', 'https://workingclasshistory.com/'];

  constructor() { }

  ngOnInit() {
  }

}
