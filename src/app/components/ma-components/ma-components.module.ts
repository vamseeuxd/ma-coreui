import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaTextInputComponent} from './ma-text-input/ma-text-input.component';
import {FormsModule} from '@angular/forms';
import {MaNumberInputComponent} from './ma-number-input/ma-number-input.component';
import {MaDateInputComponent} from './ma-date-input/ma-date-input.component';
import {BsDatepickerModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    MaTextInputComponent,
    MaNumberInputComponent,
    MaDateInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule
  ],
  exports: [
    MaTextInputComponent,
    MaNumberInputComponent,
    MaDateInputComponent
  ]
})
export class MaComponentsModule {
}
