import { Component } from '@angular/core';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ RemoveSpacesPipe ]
})
export class AppComponent {
  constructor(private removeSpaces: RemoveSpacesPipe) {}

  title = 'Tour of Heroes';
}