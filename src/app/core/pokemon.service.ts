import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemone, PokemonList } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemone : PokemonList[] = [];
  private pokemoneBehaviourSubject = new BehaviorSubject([]);
  constructor(private httpClient: HttpClient) { 
    this.getAllPokemon();
  }

  private getAllPokemon(limit=20, offset=0) {
    this.httpClient.get<Pokemone>(`https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`)
    .subscribe((item) =>
    {
      this.pokemone = item.results;
      offset = offset === 0 ? 1 : offset;
      this.pokemone = this.transformPokemon(offset);
      this.sendPokeMoneData();
    });
  }
  private transformPokemon(offset: number): PokemonList[] {
   const trnsformedItem = this.pokemone.map((item) => {
     item['id'] = offset++;
     return item;
   });
   return trnsformedItem;
  } 
  public publisPokeMoneSubject(): Observable<any> {
    return this.pokemoneBehaviourSubject.asObservable();
  }

  public sendPokeMoneData(){
    const data: any = [...this.pokemone]
    this.pokemoneBehaviourSubject.next(data);
  }
  public setLimitPokemonCard(limit: number) {
    this.getAllPokemon(limit);
  }
}
