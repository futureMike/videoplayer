import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvaboutComponent } from './cvabout/cvabout.component';
import { CvcontrolComponent } from './cvcontrol/cvcontrol.component';
import { CvlistComponent } from './cvlist/cvlist.component';
import { CvdetailComponent } from './cvdetail/cvdetail.component';
import { SafePipe } from './services/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CvaboutComponent,
    CvcontrolComponent,
    CvlistComponent,
    CvdetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
