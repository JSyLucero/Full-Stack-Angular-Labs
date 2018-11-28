import { Component, OnInit } from '@angular/core';
import { Hero } from '..//hero';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ RemoveSpacesPipe ]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private removeSpaces: RemoveSpacesPipe) { }

  ngOnInit() { }
}
