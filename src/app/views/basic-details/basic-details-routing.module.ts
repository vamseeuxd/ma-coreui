import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicDetailsComponent} from './basic-details/basic-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Basic Details'
    },
    component: BasicDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDetailsRoutingModule {
}
