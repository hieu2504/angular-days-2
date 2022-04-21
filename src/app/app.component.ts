import { Component, VERSION } from '@angular/core';

//Declarator
@Component({
  //Metadata
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  inputType = 'text';
  // Data binding

  //Event binding
  handler(event) {
    console.log('hihi', event);
  }
  user = {
    name: 'Hieu',
    age: 22,
  };
}
