import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrDirective } from './directives/attr.directive';
import { FormsModule } from '@angular/forms';
import { FontSizeDirective } from './directives/font-size.directive';
import { StructDirective } from './directives/struct.directive';
import { LifecycleDirective } from './directives/lifecycle.directive';
import { SpiedComponent } from './components/spied/spied.component';

@NgModule({
  declarations: [AppComponent, AttrDirective, FontSizeDirective, StructDirective, LifecycleDirective, SpiedComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
