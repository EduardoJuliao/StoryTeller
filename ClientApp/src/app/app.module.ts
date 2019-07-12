import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { OptionsBoxComponent } from './options-box/options-box.component';
import { StoryTellerService } from './services/story-teller.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    OptionsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoryTellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
