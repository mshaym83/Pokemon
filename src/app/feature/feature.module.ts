import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
