import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaTextInputComponent} from './ma-text-input/ma-text-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MaTextInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MaTextInputComponent]
})
export class MaComponentsModule {
}
