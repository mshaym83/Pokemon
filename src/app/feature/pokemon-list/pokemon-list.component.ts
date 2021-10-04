import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/pokemon.service';
import { PokemonList } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: PokemonList [] = [];
  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.publisPokeMoneSubject().subscribe( pokemonList => {
      this.pokemonList = pokemonList;
      console.log(this.pokemonList);
    });
  }

}
