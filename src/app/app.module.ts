import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { CatsState } from './state/cats.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([CatsState])],
  bootstrap: [AppComponent]
})
export class AppModule {}
