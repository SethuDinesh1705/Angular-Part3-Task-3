import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingcomponentComponent } from './testingcomponent/testingcomponent.component';
import { TestpipePipe } from './testpipe.pipe';
import { TestdirectiveDirective } from './testdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestingcomponentComponent,
    TestpipePipe,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
