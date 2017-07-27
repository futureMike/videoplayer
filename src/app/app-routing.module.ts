import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvaboutComponent } from './cvabout/cvabout.component';
import { CvlistComponent } from './cvlist/cvlist.component';
import { CvdetailComponent } from './cvdetail/cvdetail.component';
import { CvcontrolComponent } from './cvcontrol/cvcontrol.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/cvabout', pathMatch: 'full'
  },
  {
    path: 'cvabout', component: CvaboutComponent
  },
  {
    path: 'cvcontrol', component: CvcontrolComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
