import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonList } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, OnChanges {
  @Input()
  pokemones!: PokemonList;
 public pokemone!: Pokemon;
  constructor(private httpClient: HttpClient, private route:Router) { }
  ngOnChanges() {
    this.getPokemon();
  }

  ngOnInit(): void {
  }

  public routeTodetail() {
    this.route.navigate(['/pokemondetail']);
  }
  private getPokemon() {
    if(this.pokemones) {
      this.fetchPokemon();
    }
  }
  private fetchPokemon() {
    this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.pokemones.id}`) // 
    .subscribe((pokemon: Pokemon) => {
      this.pokemone = pokemon;
    });
  }
}

export interface Pokemon{
  name:string; 
  weight:number;
  height: number;
  id:number;
  abilities: any;
  sprites:any;
}

export interface Abilities {
  name: string;
}