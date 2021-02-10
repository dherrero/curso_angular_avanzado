import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyViewComponent } from './views/my-view/my-view.component';
import { MyView2Component } from './views/my-view2/my-view2.component';

const routes: Routes = [
  {
    path: 'app2',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full',
      },
      { path: 'one', component: MyViewComponent },
      { path: 'two', component: MyView2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
