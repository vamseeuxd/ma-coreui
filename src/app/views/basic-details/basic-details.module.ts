import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {Routes} from '@angular/router';
import {BasicDetailsRoutingModule} from './basic-details-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {MaComponentsModule} from '../../components/ma-components/ma-components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [BasicDetailsComponent],
  imports: [
    CommonModule,
    BasicDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    MaComponentsModule
  ]
})
export class BasicDetailsModule {
}
