import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent
  ],
  declarations: [DropdownComponent]
})

export class DropdownModule {
}
