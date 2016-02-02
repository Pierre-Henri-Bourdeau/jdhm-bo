import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(second: number) {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), second*1000) // 2 seconds
    );
  }
}
