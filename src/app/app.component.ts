
//imports
import { Component } from '@angular/core';

//component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//all the logic of the angular5 application resides here
export class AppComponent {
  title = 'app';
}

//services are used to make http calls or are used to share code between different components.
