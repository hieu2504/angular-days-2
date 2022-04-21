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

  user = {
    name: 'Hieu',
    age: 22,
  };
}
