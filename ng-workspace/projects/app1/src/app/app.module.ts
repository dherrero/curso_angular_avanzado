import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyViewComponent } from './views/my-view/my-view.component';
import { MyView2Component } from './views/my-view2/my-view2.component';
import { NavComponent } from './components/nav/nav.component';

const providers: [] = [];

@NgModule({
  declarations: [AppComponent, MyViewComponent, MyView2Component, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {}

// Añadir una clase Modulo que será el módulo compartido
// para poder cargar el contenido de esta aplicación

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers,
    };
  }
}
