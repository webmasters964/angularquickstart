import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  version: string;
  year: any;
  constructor() {
    this.version = `v${VERSION.full}`;
    var d = new Date();
    this.year = d.getFullYear();
  }
  ngOnInit() {
  }
  
}
