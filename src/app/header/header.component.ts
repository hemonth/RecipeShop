import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Angular';
  username = "";
  password = "";

}
