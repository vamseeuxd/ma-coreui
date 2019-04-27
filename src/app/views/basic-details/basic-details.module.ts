import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {Routes} from '@angular/router';
import {BasicDetailsRoutingModule} from './basic-details-routing.module';

const routes: Routes = [];

@NgModule({
  declarations: [BasicDetailsComponent],
  imports: [
    CommonModule,
    BasicDetailsRoutingModule
  ]
})
export class BasicDetailsModule {
}
