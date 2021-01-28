import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import {
  DataListProvider,
  OnDetachComponent,
} from './components/on-detach/on-detach.component';
import {
  DataNumberProvider,
  OnReattachComponent,
} from './components/on-reattach/on-reattach.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgZoneComponent,
    OnPushComponent,
    OnDetachComponent,
    OnReattachComponent,
    AsyncPipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataListProvider, DataNumberProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
