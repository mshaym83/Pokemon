import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const pokemonRoute: Routes = [
    {path: '', component: PokemonListComponent},
    {path:'pokemondetail', component: PokemonDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(pokemonRoute)]
})
export class PokemonRoutingModule {

}