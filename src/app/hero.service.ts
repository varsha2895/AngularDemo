import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros1';
import { Observable, of } from 'rxjs';
import {MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Heroserive fetched heros  ");
    return of(HEROES);
  }
  
  getHero(id : number): Observable<Hero> {
    this.messageService.add(`Heroserive fetched heros ${id} `);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(public messageService : MessageService) { }
}

