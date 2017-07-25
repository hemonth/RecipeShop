import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {
  myData : Array<any>;
  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
              .map(response => response.json())
              .subscribe(res => this.myData = res);
   }

  ngOnInit() {

  }

}
