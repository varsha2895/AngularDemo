import { Component, OnInit } from '@angular/core';
import{Hero } from '../hero';
import{HEROES} from '../mock-heros1';
import{ HeroService} from '../hero.service';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

	hero : Hero[];
 
  hService : HeroService;
  

  
  constructor(private heroService: HeroService) { 
    this.hService=heroService;
  }

  getHeroes(): void {
      this.heroService.getHeroes()
      .subscribe(heros => this.hero = heros);
  }

  ngOnInit() {
      this.getHeroes();
  }

}
