import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './store/reducers/rootReducer';

// Store DevTools Module --> sirve para comprobar el estado de la App desde el navegador
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';

@NgModule({
  declarations: [AppComponent, UnoComponent, DosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
