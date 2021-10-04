import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { CapitalizeFirstLetter } from './pipes/capitalize-first.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    SortComponent,
    CapitalizeFirstLetter
  ],
  imports: [
    CommonModule
  ],
  exports: [CapitalizeFirstLetter]
})
export class SharedModule { }
