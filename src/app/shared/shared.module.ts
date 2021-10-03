import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [
    SearchComponent,
    SortComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
