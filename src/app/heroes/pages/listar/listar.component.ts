import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [

  ]
})
export class ListarComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    });
  }

}
