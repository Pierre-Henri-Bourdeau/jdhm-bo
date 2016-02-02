import {Component, OnInit, View} from 'angular2/core';
import {Hero} from '../../services/hero/hero';
import {HeroDetailComponent} from '../hero/hero-detail.component';
import {HeroService} from '../../services/hero/hero.service';

@Component({
  selector: 'my-app',
  providers: [HeroService]
})
@View({
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css'],
    directives: [HeroDetailComponent],
})

export class DashboardComponent implements OnInit {

  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService) {

  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }
}
